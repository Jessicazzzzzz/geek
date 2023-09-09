const path = require('path')




module.exports = {
  // ...
  webpack: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/assets/styles'),
      '@': path.resolve(__dirname, 'src/'),
    },
  
   
  
  },
  
    style: {
      postcss:{
        mode:'file',
      
       }
    
    },
   
    eslint: {
      
      mode:'file',
      

    }


}
