export const loginUser = async ({ username, password }) => {
  // Placeholder for future API integration.
  // Currently using hardcoded credentials: kamran / kamran.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "kamran" && password === "kamran") {
        resolve({ token: "kamran-token" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 300);
  });
};
