module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./index.html"
    ],
    theme: {
      extend: {
        backgroundImage: {
            'radial-fade': "radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 90%)",
          }
      },
    },
    plugins: [],
  }