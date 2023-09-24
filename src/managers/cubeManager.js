const uniqid = require('uniqid');
const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
	const newCube = {
		id: uniqid(),
		...cubeData
	};

	cubes.push(newCube);

	console.log(cubes);

	return newCube;
}


