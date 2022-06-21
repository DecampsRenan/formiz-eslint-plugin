export const noEmptyUseForm = {
  meta: {
    docs: {
      description: 'Discourage usage of empty useForm()',
    },
    schema: [],
    messages: {
      noEmptyUseForm: 'Usage of empty `useForm` is strongly discouraged. Prefer to configure which values you needs to watch: [https://formiz-react.com/docs/core/use-form#subscribe](https://formiz-react.com/docs/core/use-form#subscribe)'
    }
  },
  create: (context) => ({
    CallExpression(node) {
      if (node.callee.name === 'useForm' || node.expression?.escapedText === 'useForm') {
        // No empty useForm
        if (node.arguments?.length === 0) {
          context.report({
            node: node.callee,
            messageId: 'noEmptyUseForm'
          });
        }
      }
    },
  })
}