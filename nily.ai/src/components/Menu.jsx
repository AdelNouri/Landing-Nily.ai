import { motion } from "framer-motion";

const Menu = () => {
    return (
        <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-12/12 w-12/12 fixed mt-18.75 bg-[#F4F1ED]"
              >
        <div className="text-gray-500 pl-10 pt-9">
            <p className="text-amber-600 text-lg font-semibold flex items-start mb-2">Products</p>
            <p className="text-sm flex items-start mb-5">Explore our powerful AI-powered products</p>
            
            <p className="text-gray-700 font-medium flex justify-start mb-3">Apps</p>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Browser Extension</a>
            <a href="#" className="flex justify-start mb-5 hover:text-amber-600">Web App</a>
            
            <p className="text-gray-700 font-medium flex justify-start mb-3">AI Chat</p>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Compare LLMs</a>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Chat with Websites</a>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Chat with Image</a>
            <a href="#" className="flex justify-start mb-5 hover:text-amber-600">Chat with PDFs</a>

            <p className="text-gray-700 font-medium flex justify-start mb-3">Productivity Tools</p>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">AI Email Assistant</a>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">AI Sidebar</a>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">AI Writing Assistant</a>
            <a href="#" className="flex justify-start mb-5 hover:text-amber-600">AI Carousel Generator</a>

            <p className="text-gray-700 font-medium flex justify-start mb-3">Content Creation</p>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Image Generation</a>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Post Generation</a>
            <a href="#" className="flex justify-start mb-3 hover:text-amber-600">Mind Map Maker</a>
            <a href="#" className="flex justify-start mb-8 hover:text-amber-600">AI Translator</a>

            <p className="text-amber-600 text-lg font-semibold flex items-start mb-2">Pricing</p>

        </div> 
        </motion.div>   
    )
}

export default Menu