export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Oracle Orbit";

export const APP_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN || "oracleorbit.com"}`;

export const APP_HOSTNAMES = new Set([
    process.env.NEXT_PUBLIC_APP_DOMAIN || "oracleorbit.com",
    `www.${process.env.NEXT_PUBLIC_APP_DOMAIN || "oracleorbit.com"}`,
]);
