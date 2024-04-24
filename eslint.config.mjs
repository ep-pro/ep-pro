import { ntnyq } from '@ntnyq/eslint-config'

export default ntnyq(
  [
    {
      files: ['./.github/workflows/*.yml'],
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      rules: {
        'import/export': 'off',
      },
    },
  ],
  {
    vue: true,
    unocss: true,
  },
)
