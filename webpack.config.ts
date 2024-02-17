import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructModuleWebpackConfig({
  name: ModuleScope.HomePage, // Replace with your new module scope
  modules: [], // Include any other modules that this module references
  dependencies: {},
  exposes: {}, // Define your exports here
});

export default config;
