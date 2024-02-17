import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructModuleWebpackConfig({
  name: ModuleScope.DungeonManager,
  modules: [], // Include any other modules that this module references
  dependencies: {},
  exposes: {
    "./routes": "./src/routes.tsx",
  },
});

export default config;
