export type AuthView = "sign_in" | "sign_up" | "forgotten_password" | "magic_link" | "update_password";

export type SocialLayout = "vertical" | "horizontal";

export type Theme = "default" | "dark" | "evenDarker";

export type Provider =
    | "apple"
    | "azure"
    | "bitbucket"
    | "discord"
    | "facebook"
    | "github"
    | "gitlab"
    | "google"
    | "keycloak"
    | "linkedin"
    | "notion"
    | "slack"
    | "spotify"
    | "twitch"
    | "twitter"
    | "workos";

export type AuthProviders = Provider[];

// export interface Localization {
//     [key: string]: I18nVariables;
//     // ['en']: I18nVariables
//     // ['ja']: I18nVariables
//     // ['de_formal']: I18nVariables
//     // ['de_informal']: I18nVariables
// }

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

