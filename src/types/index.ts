import type { Ref } from "vue";
import type { ThemeVariables } from "@/theming";
import type { SupabaseClient, Provider } from "@supabase/supabase-js";

export type ViewSignIn = "sign_in";
export type ViewSignUp = "sign_up";
export type ViewMagicLink = "magic_link";
export type ViewForgottenPassword = "forgotten_password";
export type ViewUpdatePassword = "update_password";

export type ViewType = "sign_in" | "sign_up" | "magic_link" | "forgotten_password" | "update_password";

export type SocialLayout = "vertical" | "horizontal";

export type AuthProviders = Provider[];

export type I18nVariables = {
    sign_up?: {
        email_label?: string;
        password_label?: string;
        email_input_placeholder?: string;
        password_input_placeholder?: string;
        button_label?: string;
        social_provider_text?: string;
        link_text?: string;
    };
    sign_in?: {
        email_label?: string;
        password_label?: string;
        email_input_placeholder?: string;
        password_input_placeholder?: string;
        button_label?: string;
        social_provider_text?: string;
        link_text?: string;
    };
    magic_link?: {
        email_input_label?: string;
        email_input_placeholder?: string;
        button_label?: string;
        link_text?: string;
    };
    forgotten_password?: {
        email_label?: string;
        password_label?: string;
        email_input_placeholder?: string;
        button_label?: string;
        link_text?: string;
    };
    update_password?: {
        password_label?: string;
        password_input_placeholder?: string;
        button_label?: string;
    };
};

export interface Theme {
    default: ThemeVariables;
    [key: string]: ThemeVariables;
}

export interface Appearance {
    theme?: Theme;
    prependedClassName?: string;
    variables?: {
        default: ThemeVariables;
        [key: string]: ThemeVariables;
    };
    className?: {
        anchor?: string;
        button?: string;
        container?: string;
        divider?: string;
        input?: string;
        label?: string;
        loader?: string;
        message?: string;
    };
    style?: {
        anchor?: any;
        button?: any;
        container?: any;
        divider?: any;
        input?: any;
        label?: any;
        loader?: any;
        message?: any;
    };
}

export interface Localization {
    // [key: string]: I18nVariables;
    ["en"]: I18nVariables;
    ["ja"]: I18nVariables;
    ["de_formal"]: I18nVariables;
    ["de_informal"]: I18nVariables;
}

export interface AuthProps {
    supabaseClient: SupabaseClient; // Supabase Client
    socialLayout?: SocialLayout; // This detersmines how the social providers show be displayed
    providers?: AuthProviders; // This is a list of social providers to be used
    view?: ViewType; // This determines the type of auth component to be shown
    redirectTo?: undefined | string; // This will determine where to redirect the user to after some auth operations
    onlyThirdPartyProviders?: boolean; // This will toggle if to show just the social providers without the EmailAuth component
    magicLink?: boolean; // This will toggle the 'Send magic link' on the links
    showLinks?: boolean; // This will toggle the links on the auth component to change the auth view
    /**
     * This will toggle on the dark variation of the theme
     */
    dark?: boolean;
    /**
     * Override the labels and button text
     */
    localization?: {
        lang?: "en" | "ja" | "de_formal" | "de_informal";
        variables?: I18nVariables;
    };
    appearance?: Appearance;
    theme?: "default" | string;
}

export interface ViewProps {
    authView: Ref<ViewType>;
    changeView: (view: ViewType) => void;
}

export interface LoadingProps {
    setIsLoading: (value: boolean) => void;
}

export interface AuthEmits {
    (event: "set-loading", value: boolean): void;
    (event: "signin-completed", data: any): void;
    (event: "signup-completed", data: any): void;
    (event: "magic-link-sent"): void;
    (event: "forgotten-password-completed"): void;
    (event: "update-password-completed"): void;
}
