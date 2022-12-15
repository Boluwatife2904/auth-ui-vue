# Supabase Auth UI Vue 💚

Supabase Auth UI is a pre-built Vue component for authenticating users. It supports custom themes and extensible styles to match your brand and aesthetic.

This was built as my first step towards contributing to open source and is heavily inspired by [Supabase Auth UI React](https://github.com/supabase/auth-ui/tree/main/packages/react)

<img width="552" src="/auth.png" alt="Screenshot of what the Auth component looks like the with the ThemeSupa theme">

## Set up Auth UI 👷🏽‍♂️

Import the latest version of [supabase-js](https://supabase.com/docs/reference/javascript) and the Auth UI package

#### Using npm:

```bash
$ npm install @supabase/supabase-js @supabase/auth-ui-vue
```

#### Using yarn:

```bash
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
    <Auth :supabase-client="supabase" />
</template>
```

This renders the Auth component without any styling. We recommend using one of the predefined themes to style the UI. Import the theme you want to use and pass it to the `appearence.theme` prop.

```vue
import { createClient } from "@supabase/supabase-js";
import { Auth, 
        // Import predefined theme
        ThemeSupa 
} from "@supabase/auth-ui-vue";

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

<template>
    <Auth 
        :supabase-client="supabase" 
        /* Apply predefined themee */
        :appearance="{ theme: ThemeSupa }" 
    />
</template>
```

## Social Providers
The Auth component also supports login with [offical social providers.](https://supabase.com/docs/guides/auth#providers)

```vue
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-vue";

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

<template>
    <Auth 
        :supabase-client="supabase" 
        :appearance="{ theme: ThemeSupa }" 
        :providers="['google', 'facebook', 'twitter']"
    />
</template>
```

