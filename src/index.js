import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { EditorView, basicSetup } from 'codemirror'; 

const App = () => {
  const editorRef = useRef(null);

    useEffect(() => {
        console.log("useEffect running...");
            new EditorView({
                  parent: editorRef.current,
                        extensions: [basicSetup], // Add the basicSetup extension
                              lineWrapping: true,       // Enable line wrapping
                                  });
                                      console.log("CodeMirror initialized.");
                                        }, []);

                                          return (
                                              <div>
                                                    <div ref={editorRef} /> 
                                                        </div>
                                                          );
                                                          useEffect(() => {
                                                            const toggleButton = document.getElementById('theme-toggle');
                                                              const bodyElement = document.body; 

                                                                toggleButton.addEventListener('click', () => {
                                                                    bodyElement.classList.toggle('dark-mode');
                                                                      });
                                                                      }, []); 
                                                          };

                                                          const root = ReactDOM.createRoot(document.getElementById('root'));
                                                          root.render(<App />);