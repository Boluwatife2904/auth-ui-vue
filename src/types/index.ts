import type { Ref } from "vue";
import type { ThemeVariables } from "@/theming";
import type { SupabaseClient } from "@supabase/supabase-js";

export type ViewSignIn = "sign_in";
export type ViewSignUp = "sign_up";
export type ViewMagicLink = "magic_link";
export type ViewForgottenPassword = "forgotten_password";
export type ViewUpdatePassword = "update_password";

export type ViewType = "sign_in" | "sign_up" | "magic_link" | "forgotten_password" | "update_password";

export type SocialLayout = "vertical" | "horizontal";

// export type Theme = "default" | "dark" | "evenDarker";

export type Provider = "apple" | "azure" | "bitbucket" | "discord" | "facebook" | "github" | "gitlab" | "google" | "keycloak" | "linkedin" | "notion" | "slack" | "spotify" | "twitch" | "twitter" | "workos";

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
    supabaseClient: SupabaseClient;
    providers?: AuthProviders;
    socialLayout?: SocialLayout;
    view?: ViewType;
    onlyThirdPartyProviders?: boolean;
    magicLink?: boolean;
    showLinks?: boolean;
    theme?: "default" | string;
    localization?: {
        lang?: "en" | "ja" | "de_formal" | "de_informal";
        variables?: I18nVariables;
    };
    appearance?: Appearance;
}

export interface ViewProps {
    authView: Ref<ViewType>;
    changeView: (view: ViewType) => void;
}

export interface LoadingProps {
    setIsLoading: (value: boolean) => void;
}

