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

## Social Providers 📲

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

## Customization ✨

There are several ways to customize Auth UI:

-   Use one of the [predefined themes](#predefined-themes) that comes with Auth UI
-   Extend a theme by [overriding the variable tokens](#override-themes) in a theme
-   [Create your own theme](#create-your-own-theme)
-   [Use your own CSS classes](#custom-css-classes)
-   [Use inline styles]()
-   [Use your own labels]()

### Predefined themes

Auth UI comes with several themes to customize the appearance. Each predefined theme comes with at least two variations, a `default` variation, and a `dark` variation. You can switch between these themes using the `theme` prop. Import the theme you want to use and pass it to the `appearence.theme` prop.

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

> Currently there is only one predefined theme available, but I plan to add more as soon as Supabase does.

### Switch theme variations

Auth UI comes with two theme variations: `default` and `dark`. You can switch between these themes with the `theme` prop.

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
        /* Set theme to dark */
        theme="dark"
    />
</template>
```

If you don't pass a value to `theme` it uses the `"default"` theme. You can pass `"dark"` to the theme prop to switch to the `dark` theme. If your theme has other variations, use the name of the variation in this prop.

### Override themes

Auth UI themes can be overridden using variable tokens. See the [list of variable tokens.](https://github.com/supabase-community/auth-ui/blob/main/packages/react/common/theming/Themes.tsx)

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
        :appearance="{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: 'orange',
                        brandAccent: 'yellow'
                    }
                }
            }
        }"
    />
</template>
```

If you created your own theme, you may not need to override any of the them.

### Create your own theme

You can create your own theme by following the same structure within a `appearance.theme` property. See the list of [tokens within a theme.](https://github.com/supabase-community/auth-ui/blob/main/packages/react/common/theming/Themes.tsx)

```vue
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-vue";

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

const customTheme = {
  default: {
    colors: {
      brand: 'hsl(153 60.0% 53.0%)',
      brandAccent: 'hsl(154 54.8% 45.1%)',
      brandButtonText: 'white',
      // ..
  },
  dark: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#2e2e2e',
      defaultButtonBackgroundHover: '#3e3e3e',
      //..
    },
  },
  // You can also add more theme variations with different names.
  evenDarker: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#1e1e1e',
      defaultButtonBackgroundHover: '#2e2e2e',
      //..
    },
  },
}

<template>
    <Auth
        :supabase-client="supabase"
        theme="default" /* can also be "dark" or "evenDarker" */
        :appearance="{ theme: customTheme }"
    />
</template>
```

You can switch between different variations of your theme with the ["theme" prop.](#switch-theme-variations)

### Custom CSS Classes

You can use custom CSS classes for the following elements: `"button"`, `"container"`, `"anchor"`, `"divider"`, `"label"`, `"input"`, `"loader"`, `"message"`.

```vue
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-vue";

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

<template>
    <Auth
        :supabase-client="supabase"
        :appearance="{
            className: {
                anchor: 'my-awesome-anchor',
                button: 'my-awesome-button',
                //..
            }
        }"
    />
</template>
```
