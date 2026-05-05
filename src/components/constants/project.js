const project = [
    {
        name: "AI News Intelligence Dashboard",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Streamlit-logo-primary-colormark-darktext.png/320px-Streamlit-logo-primary-colormark-darktext.png",
        briefDesc: "A next-generation AI-powered news monitoring platform with real-time bias detection and sentiment analysis.",
        desc: [
            "A next-generation news monitoring platform that goes beyond simple headlines.",
            "Uses advanced AI to summarize, analyze sentiment, and detect media bias in real-time (focus on India 🇮🇳).",
            "Smart Summarization: Compresses long articles into bulleted key facts using OpenRouter (GPT-4o).",
            "Bias Detection: AI analyzes framing to detect political leaning and hidden agendas.",
            "Global Mood Gauge: Real-time sentiment analysis (Optimistic vs Grim) of the entire news feed using NLTK VADER."
        ],
        tech: ["Python", "Streamlit", "OpenRouter", "GPT-4o", "NLTK", "VADER"],
        githubLink: "https://github.com/poornaprajays/Ai-news-intelligence-using-Sreamlit-.git",
        liveLink: "https://ainews-dashboard.streamlit.app/",
    },
    {
        name: "potholes.live",
        logo: "https://images.unsplash.com/photo-1515162305285-0293e4f193b3?w=400&q=80",
        briefDesc: "A real-time pothole detection and mapping platform built for speed, privacy, and impact.",
        desc: [
            "A real-time pothole detection system that uses camera feed to identify potholes on the spot and instantly map them.",
            "The system processes live video, detects potholes using a trained YOLO-based ML model (edge inference).",
            "Pins the exact locations on a Mapbox-powered map on the website.",
            "Uses a modern web stack to help users report and visualize road hazards in real time."
        ],
        tech: ["YOLO", "JavaScript", "Mapbox", "Python", "Edge Inference"],
        githubLink: "https://github.com/07raghavan/potholes.live",
        liveLink: "https://potholes-live.netlify.app/",
    }
]

export { project };