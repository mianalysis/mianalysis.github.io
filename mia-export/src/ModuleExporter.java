
import java.io.FileWriter;
import java.io.PrintWriter;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.json.JSONObject;

import io.github.mianalysis.mia.MIA;
import io.github.mianalysis.mia.module.AvailableModules;
import io.github.mianalysis.mia.module.Categories;
import io.github.mianalysis.mia.module.Category;
import io.github.mianalysis.mia.module.Module;
import io.github.mianalysis.mia.module.Modules;
import io.github.mianalysis.mia.object.parameters.abstrakt.Parameter;

public class ModuleExporter {
    private static final String OUTPUT_PATH = "../src/assets/modules.json";
    private static final int JSON_INDENTATION = 2;
    private static TreeMap<Category, List<Module>> modulesByCategory;

    public static void main(String[] args) {
        modulesByCategory = getModules();

        JSONObject json = generateCategory(Categories.getRootCategory(), "");

        export(json);
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

        final List<JSONObject> modules = modulesByCategory.getOrDefault(category, new ArrayList<>())
                .stream()
                .map(m -> generateModule(m, path))
                .collect(Collectors.toList());

        return new JSONObject()
                .put("name", category.getName())
                .put("slug", slug)
                .put("path", path)
                .put("description", category.getDescription())
                .put("sub_categories", children)
                .put("modules", modules);
    }

    private static JSONObject generateModule(Module module, String pathPrefix) {
        final String slug = slugify(module.getName());

        final String path = pathPrefix + "/" + slug;

        final List<JSONObject> parameters = module.getAllParameters()
                .values()
                .stream()
                .map(ModuleExporter::generateParameter)
                .collect(Collectors.toList());

        return new JSONObject()
                .put("name", module.getName())
                .put("slug", slug)
                .put("path", path)
                .put("shortDescription", module.getShortDescription())
                .put("fullDescription", module.getDescription())
                .put("parameters", parameters);
    }

    private static JSONObject generateParameter(Parameter parameter) {
        return new JSONObject()
                .put("name", parameter.getName())
                .put("description", parameter.getDescription());
    }

    private static String slugify(String name) {
        return name.toLowerCase()
                .replaceAll("[/\\\\?%*:|\"<>]", "")
                .replaceAll(" ", "-");
    }

    private static TreeMap<Category, List<Module>> getModules() {
        // Get a list of Modules
        List<String> moduleNames = AvailableModules.getModuleNames(false);

        // Converting the list of classes to a list of Modules
        TreeMap<Category, List<Module>> modulesByCategory = new TreeMap<>();

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
                        modules = new ArrayList<>();

                    modules.add(module);

                    return modules;
                });

            } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | NoSuchMethodException | InvocationTargetException e) {
                MIA.log.writeError(e);
            }
        }

        return modulesByCategory;
    }
}
