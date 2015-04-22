function arrAvg(array){
	sum = 0
	for (var i = 0; i < array.length; i++) {
		sum += array[i]
	};
	return sum / array.length
}

function arrMax(array){
	max = array[0]
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max){
			max = array[i]
		};
	};
	return max
}

function isMember(array, str){
	for (var i = 0; i < array.length; i++) {
		if (array[i] == str) {
			return true
		};
	};
	return false
};