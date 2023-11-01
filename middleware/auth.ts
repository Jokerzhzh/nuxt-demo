export default defineNuxtRouteMiddleware((to, from) => {
  console.log("🚀 ~ middleware/auth.ts");

  if (to.params.id === "1") {
    return abortNavigation();
  }

  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }
});
