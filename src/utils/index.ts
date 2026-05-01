// constants
import { LIST_ITEM_VARIANTS, CHILD_VARIANTS, FADE_IN_VARIANTS, MODAL_VARIANTS } from "./constants/animation";
import { APP_DOMAIN, APP_HOSTNAMES, APP_NAME } from "./constants/site";
import { DEFAULT_AVATAR_URL, PAGINATION_LIMIT, COMPANIES, PROCESS, SERVICE_GROUPS, SERVICES } from "./constants/misc";
import { BLOG_CONTENT } from "./constants/blog-content";
import { PLANS, PRICING_FEATURES, WORKSPACE_LIMIT } from "./constants/pricing";
import { COMPANY_LINKS, NAV_LINKS, SERVICE_LINKS } from "./constants/nav-links";
import { aeonik, inter } from "./constants/fonts";

// functions
import { cn } from "./functions/cn";
import { isValidUrl } from "./functions/urls";
import { generateMetadata } from "./functions/metadata";

export {
    // constants
    LIST_ITEM_VARIANTS,
    CHILD_VARIANTS,
    APP_DOMAIN,
    APP_HOSTNAMES,
    APP_NAME,
    DEFAULT_AVATAR_URL,
    FADE_IN_VARIANTS,
    MODAL_VARIANTS,
    PAGINATION_LIMIT,
    PLANS,
    PRICING_FEATURES,
    WORKSPACE_LIMIT,
    NAV_LINKS,
    COMPANY_LINKS,
    SERVICE_LINKS,
    COMPANIES,
    PROCESS,
    SERVICE_GROUPS,
    SERVICES,
    BLOG_CONTENT,
    aeonik,
    inter,

    // functions
    cn,
    isValidUrl,
    generateMetadata,
};
