const onWalletConnected = async (address: string) => {
  // Early return if address is falsy or the same as currentAddress
  if (!address || address === currentAddress) return;

  // Update currentAddress only if different
  currentAddress = address;

  try {
    // Sign in and get tokens
    const userCredential = await auth.signInWithPopup(provider);
    const idToken = await userCredential.user.getIdToken();
    const customToken = await exchangeIdTokenForCustomToken(idToken);

    // Sign in with the custom token and fetch user data
    await auth.signInWithCustomToken(customToken);
    const userData = await getUserData(currentAddress);

    // Update the user's data in the state
    setUserData(userData);
  } catch (error) {
    console.error('Failed to connect wallet:', error);
  }
};
