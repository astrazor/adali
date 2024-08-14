// Initialize WebGL context
const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl');

// Create and compile shader programs (vertex and fragment shaders)
const vertexShaderSource = `...`;  // Vertex shader source code
const fragmentShaderSource = `...`;  // Fragment shader source code

// Compile shaders and create program
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

// Use the created program
gl.useProgram(program);

// Get the location of the uniform variable
const u_keepWithinCircle = gl.getUniformLocation(program, 'u_keepWithinCircle');

// Boolean variable to control the uniform
let keepWithinCircle = true;

// Set the uniform value based on the boolean variable
gl.uniform1i(u_keepWithinCircle, keepWithinCircle ? 1 : 0);

// Define other WebGL settings and draw call here...
