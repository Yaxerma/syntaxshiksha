import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI: GPT-4 and Beyond",
            date: "March 15, 2024",
            author: "Tech Enthusiast",
            excerpt: "Exploring the latest developments in artificial intelligence and what's next for large language models...",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            category: "Artificial Intelligence"
        },
        {
            id: 2,
            title: "Web3: The Next Generation of Internet",
            date: "March 14, 2024",
            author: "Blockchain Expert",
            excerpt: "Understanding the fundamentals of Web3 and its potential impact on the future of the internet...",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            category: "Web3"
        },
        {
            id: 3,
            title: "Quantum Computing: Breaking New Grounds",
            date: "March 13, 2024",
            author: "Quantum Researcher",
            excerpt: "Latest breakthroughs in quantum computing and their implications for cryptography and computing...",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            category: "Quantum Computing"
        },
        {
            id: 4,
            title: "The Rise of Edge Computing",
            date: "March 12, 2024",
            author: "Cloud Architect",
            excerpt: "How edge computing is revolutionizing data processing and improving response times...",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            category: "Cloud Computing"
        }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            padding: '80px 20px 20px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    color: '#333',
                    marginBottom: '30px',
                    textAlign: 'center'
                }}>Latest Tech News & Blogs</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    padding: '20px'
                }}>
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease'
                            }}
                            whileHover={{ transform: 'translateY(-5px)' }}
                        >
                            <div style={{
                                height: '200px',
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} />
                            <div style={{ padding: '20px' }}>
                                <span style={{
                                    backgroundColor: '#FF8C00',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    display: 'inline-block',
                                    marginBottom: '10px'
                                }}>
                                    {post.category}
                                </span>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '10px',
                                    color: '#333'
                                }}>{post.title}</h2>
                                <p style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    lineHeight: '1.6'
                                }}>{post.excerpt}</p>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: '#888',
                                    fontSize: '0.9rem'
                                }}>
                                    <span>{post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
