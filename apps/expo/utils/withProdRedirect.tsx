import { Redirect } from "expo-router";
import { ComponentType } from "react";

export default function withProdRedirect<T extends {}>(
  href: string,
  Component: ComponentType<T>
) {
  return function PageBehindProdEnvRedirect(props: T) {
    if (process.env.EXPO_PUBLIC_ENVIRONMENT === "production")
      return <Redirect href={href} />;
    else return <Component {...props} />;
  };
}
