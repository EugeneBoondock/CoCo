import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { EditorView, basicSetup } from 'codemirror'; 

const App = () => {
  const editorRef = useRef(null);

    useEffect(() => {
        console.log("useEffect running...");
            new EditorView({
                  parent: editorRef.current,
                        extensions: [basicSetup], 
                              lineWrapping: true,       
                                  });
                                      console.log("CodeMirror initialized.");

                                          // *** Move the toggle button logic here, inside the same useEffect *** 
                                              const toggleButton = document.getElementById('theme-toggle');
                                                  const bodyElement = document.body; 

                                                      toggleButton.addEventListener('click', () => {
                                                            bodyElement.classList.toggle('dark-mode');
                                                                });

                                                                  }, []); // The empty dependency array ensures this runs once after the first render

                                                                    return (
                                                                        <div>
                                                                              <div ref={editorRef} /> 
                                                                                  </div>
                                                                                    );
                                                                                    };

                                                                                    const root = ReactDOM.createRoot(document.getElementById('root'));
                                                                                    root.render(<App />);