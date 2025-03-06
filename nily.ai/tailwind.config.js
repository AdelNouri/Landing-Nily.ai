module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./index.html"
    ],
    theme: {
      extend: {
        background: {
            'radial-fade': "radial-gradient(circle, rgba(237, 241, 251,0.2) 20%, rgba(237, 241, 251,0.7) 50%, rgba(237, 241, 251,1) 8%)",
          }
      },
    },
    plugins: [],
  }