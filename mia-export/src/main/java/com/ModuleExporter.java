
package com;

import java.io.FileWriter;
import java.io.PrintWriter;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;

import org.json.JSONObject;

import io.github.mianalysis.mia.MIA;
import io.github.mianalysis.mia.module.AvailableModules;
import io.github.mianalysis.mia.module.Categories;
import io.github.mianalysis.mia.module.Category;
import io.github.mianalysis.mia.module.Module;
import io.github.mianalysis.mia.module.Modules;
import io.github.mianalysis.mia.object.parameters.ParameterGroup;
import io.github.mianalysis.mia.object.parameters.abstrakt.Parameter;
import net.imagej.patcher.LegacyInjector;

public class ModuleExporter {
    private static final String OUTPUT_PATH = "./src/assets/modules.json";
    private static final int JSON_INDENTATION = 2;
    private static HashMap<Category, TreeSet<Module>> modulesByCategory;

    public static void main(String[] args) {
        LegacyInjector.preinit();

        System.out.println("MIA version [" + MIA.getVersion() + "]");

        modulesByCategory = getModules();

        JSONObject json = generateCategory(Categories.getRootCategory(), "");

        export(json);

        System.out.println("Exported JSON");

    }

    private static void export(JSONObject json) {
        final String jsonString = json.toString(JSON_INDENTATION);

        try (PrintWriter out = new PrintWriter(new FileWriter(OUTPUT_PATH))) {
            out.write(jsonString);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static JSONObject generateCategory(Category category, String pathPrefix) {
        final String slug = slugify(category.getName());

        final String path = pathPrefix + "/" + slug;

        final List<JSONObject> children = category.getChildren()
                .stream()
                .map(c -> generateCategory(c, path))
                .collect(Collectors.toList());

        final List<JSONObject> modules = modulesByCategory.getOrDefault(category, new TreeSet<>())
                .stream()
                .map(m -> generateModule(m, path))
                .collect(Collectors.toList());

        return new JSONObject()
                .put("name", category.getName())
                .put("slug", slug)
                .put("path", path)
                .put("description", category.getDescription())
                .put("subCategories", children)
                .put("modules", modules);
    }

    private static JSONObject generateModule(Module module, String pathPrefix) {
        final String slug = slugify(module.getName());

        final String path = pathPrefix + "/" + slug;

        final List<JSONObject> parameters = module.getAllParameters()
                .values()
                .stream()
                .map(ModuleExporter::generateParameter)
                .filter(p -> p != null)
                .collect(Collectors.toList());

        return new JSONObject()
                .put("name", module.getName())
                .put("slug", slug)
                .put("path", path)
                .put("deprecated", module.isDeprecated())
                .put("version", module.getVersionNumber())
                .put("shortDescription", module.getShortDescription())
                .put("fullDescription", module.getDescription())
                .put("parameters", parameters);
    }

    private static JSONObject generateParameter(Parameter parameter) {
        if (!parameter.isExported()) {
            return null;
        }

        JSONObject json = new JSONObject()
                .put("name", parameter.getName())
                .put("description", parameter.getDescription());

        if (parameter instanceof ParameterGroup) {
            ParameterGroup group = (ParameterGroup) parameter;

            final List<JSONObject> children = group.getTemplateParameters().values()
                    .stream()
                    .map(ModuleExporter::generateParameter)
                    .filter(p -> p != null)
                    .collect(Collectors.toList());

            json.put("subParameters", children);
        }

        return json;
    }

    private static String slugify(String name) {
        return name.toLowerCase()
                .replaceAll("[/\\\\?%*:|\"<>]", "")
                .replaceAll(" ", "-");
    }

    private static HashMap<Category, TreeSet<Module>> getModules() {
        // Get a list of Modules
        List<String> moduleNames = AvailableModules.getModuleNames(false);

        // Converting the list of classes to a list of Modules
        HashMap<Category, TreeSet<Module>> modulesByCategory = new HashMap<>();

        Modules tempCollection = new Modules();

        for (String className : moduleNames) {
            try {
                Class<Module> clazz = (Class<Module>) Class.forName(className);

                // Skip any abstract Modules
                if (Modifier.isAbstract(clazz.getModifiers()))
                    continue;

                Constructor<Module> constructor = clazz.getDeclaredConstructor(Modules.class);
                Module module = (Module) constructor.newInstance(tempCollection);

                modulesByCategory.compute(module.getCategory(), (category, modules) -> {
                    if (modules == null)
                        modules = new TreeSet<>();

                    modules.add(module);

                    return modules;
                });

            } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | NoSuchMethodException
                    | InvocationTargetException e) {
                MIA.log.writeError(e);
            }
        }

        return modulesByCategory;
    }
}
