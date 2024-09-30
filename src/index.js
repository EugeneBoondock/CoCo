import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // Import CodeMirror's base styles

const App = () => {
  const editorRef = useRef(null);

    useEffect(() => {
        // Initialize CodeMirror after the component renders
            const editor = CodeMirror(editorRef.current, {
                  value: '// Welcome to CoCo Editor!\nconsole.log("Hello, world!");', // Starting code
                        mode: 'javascript',  // Set the default language mode
                              lineNumbers: true,    // Show line numbers
                                  }); 
                                    }, []); 

                                      return (
                                          <div>
                                                <div ref={editorRef} /> 
                                                    </div>
                                                      );
                                                      };

                                                      const root = ReactDOM.createRoot(document.getElementById('root'));
                                                      root.render(<App />);