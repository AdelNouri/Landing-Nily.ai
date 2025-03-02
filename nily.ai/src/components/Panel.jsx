const Panel = () => {
    console.log("jkadjf;a");
    return (
        <div className="grid grid-cols-4 bg-slate-200 ml-24 mt-14 fixed w-full h-80 text-slate-800">
            <div className="">
                <p>Apps</p>

            </div>
            <div>
                <p>AI Chat</p>
                <a>Compare LLMs</a>
                <a>Chat with Websites</a>
                <a>Chat with Image</a>
                <a>Chat with PDFs</a>
            </div>
            <div>
                <p>Productivity Tools</p>
            </div>
            <div>
                <p>Content Creation</p>
            </div>
        </div>
    )
}

export default Panel