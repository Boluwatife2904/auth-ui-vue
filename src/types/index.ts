export type AuthView =
    | "sign_in"
    | "sign_up"
    | "forgotten_password"
    | "magic_link"
    | "update_password";

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

