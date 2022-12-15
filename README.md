# Supabase Auth UI Vue 💚

Supabase Auth UI is a pre-built Vue component for authenticating users. It supports custom themes and extensible styles to match your brand and aesthetic.

This was built as my first step towards contributing to open source and is heavily inspired by [Supabase Auth UI React](https://github.com/supabase/auth-ui/tree/main/packages/react)

<img width="552" src="/auth.png" alt="Screenshot of what the Auth component looks like the with the ThemeSupa theme">

## Set up Auth UI 👷🏽‍♂️
Import the latest version of [supabase-js](https://supabase.com/docs/reference/javascript) and the Auth UI package
#### Using npm:
```
$ npm install @supabase/supabase-js @supabase/auth-ui-vue
```

#### Using yarn:
```
$ yarn add @supabase/supabase-js @supabase/auth-ui-vue
```

### Import the Auth component
Pass `supabaseClient` from `@supabase/supabase-js` as a prop to the component.
```vue
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-vue";

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

<template>
    <Auth supabase-client="supabase" />
</template>
```