import { RuleTester } from 'eslint';
import { noEmptyUseForm } from './index';
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });


ruleTester.run('no-empty-use-form', noEmptyUseForm, {
  valid: [
    'const { isValid } = useForm({ subscribe: { form: true } })',
    'const { values } = useForm({ subscribe: { fields: ["myField"] } }); console.log(values.myField);'
  ],
  invalid: [
    {
      code: 'useForm()',
      errors: [{ messageId: 'noEmptyUseForm' }],
    }, 
    {
      code: 'const form = useForm()',
      errors: [{ messageId: 'noEmptyUseForm' }],
    },
  ]
});