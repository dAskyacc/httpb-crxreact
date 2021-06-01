export function createMaserAccountAndGetSeedPhrase(password) {
  return async (dispatch) => {
    try {
      const seeds = await generateSeed();
      return seeds;
    } catch (err) {
      return Promise.reject(err);
    } finally {
      console.log('create success.');
    }
  };
}

export async function generateSeed() {
  return new Promise((resolve) => {
    setTimeout(resolve('Seed words'), 5000);
  });
}
