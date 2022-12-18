# Supabase Auth UI Vue 💚

Supabase Auth UI is a pre-built Vue component for authenticating users. It supports custom themes and extensible styles to match your brand and aesthetic.

This was built as my first step towards contributing to open source and is heavily inspired by [Supabase Auth UI React](https://github.com/supabase/auth-ui/tree/main/packages/react)

<img width="552" src="/auth.png" alt="Screenshot of what the Auth component looks like the with the ThemeSupa theme">

## Demo
You can find a link to the hosted demo [here](https://auth-ui-vue-demo-evqn.vercel.app/).

## Team Members
| Name | Github handle | Twitter Username
| --- | --- | --- |
| Sanusi Victor Olajuwon | Boluwatife2904 | developerbolu |

## How Supabase was used
Supabase was used extensively for authentication. With Auth UI Vue, developers are able to setup authentication for their Projects. Their users can:
- Sign up and Login with the email and passwords.
- They can sign in using a magic link
- They can also request to change their password when they forget it.

## Motivation
I always wanted to work with Supabase for a fun project and learn a bit about some of the features it provided and while reading through the docs, I came across [Supabase Auth UI React](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui) which allowed developers to authenticate users on their project and while it was a really interesting component, I was a bit sad when I realized it could only be used with React so I said to myself - 'This shouldn't stop me from working with Supabase'. So I picked up the challange to rebuild the same component for Vue developers so they could experience the same awesomeness as the React component.

## Set up Auth UI 👷🏽‍♂️

Import the latest version of [supabase-js](https://supabase.com/docs/reference/javascript) and the Auth UI package

#### Using npm:

```bash
$ npm install @supabase/supabase-js auth-ui-vue
```

#### Using yarn:

```bash
$ yarn add @supabase/supabase-js auth-ui-vue
```

### Import the Auth component

Pass `supabaseClient` from `@supabase/supabase-js` as a prop to the component.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template>
    <Auth :supabase-client="supabase" />
</template>
```

This renders the Auth component without any styling. We recommend using one of the predefined themes to style the UI. Import the theme you want to use and pass it to the `appearence.theme` prop.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import {
    Auth,
    // Import predefined theme
    ThemeSupa,
} from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template><Auth :supabase-client="supabase" /* Apply predefined theme */ :appearance="{ theme: ThemeSupa }" /></template>
```

## Social Providers 📲

The Auth component also supports login with [offical social providers.](https://supabase.com/docs/guides/auth#providers)

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template>
    <Auth :supabase-client="supabase" :appearance="{ theme: ThemeSupa }" :providers="['google', 'facebook', 'twitter']" />
</template>
```

## Props ⚡️

There are some props that are could be passed to props to the Auth component to determine its output
| Prop | Description | Type | default
| --- | --- | --- | --- |
| supabaseClient | An isomorphic Javascript client for interacting with Postgres. | _`SupabaseClient`_ |
| socialLayout | This determines how the social providers show be displayed | _`horizontal \| vertical`_ | vertical |
| providers | This is an array of social providers that can be used by your users to sign up | _`Provider[]`_ |
| view | This determines what type of auth component is displayed | _`sign_in \| sign_up \| magic_link \| forgotten_password \| update_password`_ | sign_in |
| redirectTo | This determines where supabase should redirect to when users want to sign in with a magic link, sign in with a social provider or update password | _`undefined \| string`_ |
| onlyThirdPartyProviders | This determines whether to show the email and password mode of authentication when the [providers](#social-providers-📲) props is set | _`boolean`_ | false |
| magicLink | This determines whether to show the _'Send Magic Link'_ anchor so users can sign in with magic link | _`boolean`_ | false |
| showLinks | This determines whether to show the links which users can use to change the view to either _`sign_up/sign_in, magic_link,forgotten_password`_ | *`boolean`* | true |
| localization | This determines how the auth component texts like label, placeholders, and anchors can be styled to match your design language| _`Localization`_ | { lang: 'en' } |
| appearance | This determines how the auth component can be styled to match your design | _`Appearance`_ |
| theme | This determines what variant of the theme passed to *`appearance.theme`* | *`default \| string`* | default |

#### External resources for props:

-   Check [here](https://github.com/supabase/supabase-js) to see how to initialise the `SupabaseClient`.
-   Check [here](https://supabase.com/docs/guides/auth/overview#providers) for the list of Providers that can be passed to the `providers` prop.
-   Check [here](#custom-labels) to see how the language of the auth component can be overwritten using the `localization` prop.
-   Check [here](#customization-✨) to see how the auth component can be styled to match your design using the `appearance` prop.


## Events 🌐
These are some of the events that are emitted by the Auth component when an auth operation is completed which can be listened to on the page/component where the Auth component is being used.

| Event Name | Description | Emitted Value
| --- | --- | --- |
| set-loading | This event is emitted when an auth operation begins and when it ends | `loading: boolean` |
| signin-completed | This event is emitted when the user signs in into your app successfully | `data: any` |
| signup-completed | This event is emitted when the user signs up on your app successfully | `data:any` |
| magic-link-sent | This event is emitted when the user asks for a magic link to be sent to their email | 
| forgotten-password-completed | This event is emitted when the user wants to reset their password and link to do so is sent to their email |
| update-password-completed | This event is emitted when the user successfully change their password to a new one |

### Example:

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");

function doSomething() {
    alert('Magic Link have being sent to your email.')
}
</script>

<template>
    <Auth 
        :supabase-client="supabase"
        @magic-link-sent="doSomething"
    />
</template>
```

## Customization ✨

There are several ways to customize Auth UI:

-   Use one of the [predefined themes](#predefined-themes) that comes with Auth UI
-   Extend a theme by [overriding the variable tokens](#override-themes) in a theme
-   [Create your own theme](#create-your-own-theme)
-   [Use your own CSS classes](#custom-css-classes)
-   [Use inline styles](#custom-inline-css)
-   [Use your own labels](#custom-labels)

### Predefined themes

Auth UI comes with several themes to customize the appearance. Each predefined theme comes with at least two variations, a `default` variation, and a `dark` variation. You can switch between these themes using the `theme` prop. Import the theme you want to use and pass it to the `appearence.theme` prop.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import {
    Auth,
    // Import predefined theme
    ThemeSupa,
} from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template><Auth :supabase-client="supabase" /* Apply predefined theme */ :appearance="{ theme: ThemeSupa }" /></template>
```

> Currently there is only one predefined theme available, but I plan to add more as soon as Supabase does.

### Switch theme variations

Auth UI comes with two theme variations: `default` and `dark`. You can switch between these themes with the `theme` prop.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template><Auth :supabase-client="supabase" :appearance="{ theme: ThemeSupa }" /* Set theme to dark */ theme="dark" /></template>
```

If you don't pass a value to `theme` it uses the `"default"` theme. You can pass `"dark"` to the theme prop to switch to the `dark` theme. If your theme has other variations, use the name of the variation in this prop.

### Override themes

Auth UI themes can be overridden using variable tokens. See the [list of variable tokens.](https://github.com/supabase-community/auth-ui/blob/main/packages/react/common/theming/Themes.tsx)

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template>
    <Auth
        :supabase-client="supabase"
        :appearance="{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: 'orange',
                        brandAccent: 'yellow',
                    },
                },
            },
        }"
    />
</template>
```

If you created your own theme, you may not need to override any of the them.

### Create your own theme

You can create your own theme by following the same structure within a `appearance.theme` property. See the list of [tokens within a theme.](https://github.com/supabase-community/auth-ui/blob/main/packages/react/common/theming/Themes.tsx)

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css"

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

const customTheme = {
  default: {
    colors: {
      brand: 'hsl(153 60.0% 53.0%)'
      brandAccent: 'hsl(154 54.8% 45.1%)'
      brandButtonText: 'white',
      // ..
    }
  },
  dark: {
    colors: {
      brandButtonText: 'white'
      defaultButtonBackground: '#2e2e2e'
      defaultButtonBackgroundHover: '#3e3e3e'
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
</script>

<template><Auth :supabase-client="supabase" theme="default" /* can also be "dark" or "evenDarker" */ :appearance="{ theme: customTheme }" /></template>
```

You can switch between different variations of your theme with the ["theme" prop.](#switch-theme-variations)

### Custom CSS Classes

You can use custom CSS classes for the following elements: `"button"`, `"container"`, `"anchor"`, `"divider"`, `"label"`, `"input"`, `"loader"`, `"message"`.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template>
    <Auth
        :supabase-client="supabase"
        :appearance="{
            className: {
                anchor: 'my-awesome-anchor',
                button: 'my-awesome-button',
                //..
            },
        }"
    />
</template>
```

### Custom inline CSS

You can use custom CSS inline styles for the following elements: `"button"`, `"container"`, `"anchor"`, `"divider"`, `"label"`, `"input"`, `"loader"`, `"message"`.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template>
    <Auth
        :supabase-client="supabase"
        :appearance="{
            style: {
                anchor: { color: 'blue' },
                button: { background: 'red', color: 'white' },
                //..
            },
        }"
    />
</template>
```

### Custom labels

There are currently 4 default localization which can be used with the `localization.lang` prop. They are `en`, `ja`, `de_formal`, `de_informal`.
You can also use custom labels with `localization.variables`. See the [list of labels](https://github.com/supabase-community/auth-ui/blob/main/packages/react/common/lib/Localization/en.json) that can be overwritten.

```vue
<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import { Auth } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";

const supabase = createClient("<INSERT PROJECT URL>", "<INSERT PROJECT ANON API KEY>");
</script>

<template>
    <Auth :supabase-client="supabase" /* highlight starts */ :localization="{ variables: { sign_in: { email_label: 'Your email address', password_label: 'Your strong password', },
    } }" /* Highlight ends */ />
</template>
```

