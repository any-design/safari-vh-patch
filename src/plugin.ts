import type { PluginCreator } from 'postcss';

interface PluginOptions {
  /** Property name for the viewport height variable */
  variableName?: string;
  /** Whether to keep the original vh declaration as fallback */
  keepFallback?: boolean;
}

const defaultOptions: PluginOptions = {
  variableName: '--vh',
  keepFallback: true,
};

const plugin: PluginCreator<PluginOptions> = (opts = {}) => {
  const options = { ...defaultOptions, ...opts };

  return {
    postcssPlugin: 'postcss-viewport-height-correction',
    Declaration(decl) {
      // Match any number followed by vh
      const vhRegex = /(\d+\.?\d*)vh\b/g;

      if (vhRegex.test(decl.value)) {
        const correctedValue = decl.value.replace(
          vhRegex,
          (match, value) => `calc(var(${options.variableName}, 1vh) * ${value})`
        );

        if (options.keepFallback) {
          // Keep the original declaration as a fallback
          decl.cloneBefore();
        }

        // Update the current declaration with the corrected value
        decl.value = correctedValue;
      }
    }
  };
};

plugin.postcss = true;

export default plugin;
