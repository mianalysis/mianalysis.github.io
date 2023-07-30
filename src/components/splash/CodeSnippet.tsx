'use client';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import javaSyntax from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('java', javaSyntax);

export default function CodeSnippet() {
  return (
    <div className="shadow-lg text-xs">
      <SyntaxHighlighter language="java" style={obsidian} showLineNumbers>
        {`@Override
public Status process(Workspace workspace) {
    String inputObjectsName = parameters.getValue(INPUT_OBJECTS,workspace);
    String outputObjectsName = parameters.getValue(OUTPUT_OBJECTS,workspace);

    Objs inputObjects = workspace.getObjects().get(inputObjectsName);
    SpatCal calIn = inputObjects.getSpatialCalibration();
    SpatCal calOut = new SpatCal(calIn.getDppXY(), calIn.getDppZ(), calIn.getUnits(), calIn.getWidth(),
            calIn.getHeight(), 1);
    double frameInterval = inputObjects.getFrameInterval();
    Unit<Time> temporalUnit = inputObjects.getTemporalUnit();
    Objs outputObjects = new Objs(outputObjectsName, calOut, inputObjects.getNFrames(),
            frameInterval, temporalUnit);

    for (Obj inputObject:inputObjects.values()) {
        try {
            process(inputObject,outputObjects, true);
        } catch (IntegerOverflowException e) {
            return Status.FAIL;
        }
    }

    workspace.addObjects(outputObjects);

    // Showing objects
    if (showOutput) outputObjects.convertToImageIDColours().show();

    return Status.PASS;
}`}
      </SyntaxHighlighter>
    </div>
  );
}
