export class Solution {

	static validateReservations (data)  {
		let lines = data.split('\n');
		let reservations = [];
		let scheduleRoom1 = Array(24).fill(null)
		let scheduleRoom2 = Array(24).fill(null)
		let accepted = [];
		let rejected = [];
		lines.forEach(line => {
			const tokens = line.split(' ');
			const reservation = {
				'room': tokens[0],
				'starts': parseInt(tokens[1], 10),
				'ends' : parseInt(tokens[2], 10),
				'name': tokens[3]
			};		
			reservations.push(reservation);
		});
		console.log(reservations);
		reservations.forEach(reservation => {

			for (let index = reservation.starts; index <= reservation.ends && index <= 23;index++) {
				if (reservation.room.startsWith('room1')) {
					if (scheduleRoom1[index] != null) {
						rejected.push(reservation);
						break;
					} else {
						if (index === reservation.ends) {
							accepted.push(reservation)
						}
						scheduleRoom1[index] = reservation.name;
					}
					
				} else if (reservation.room.startsWith('room2')) {
					if (scheduleRoom2[index] != null) {
						rejected.push(reservation);
						break;
					} else {
						if (index === reservation.ends) {
							accepted.push(reservation)
						}
						scheduleRoom2[index] = reservation.name;
					}
				}
			}
		});
		this.printResults(accepted, 'Accepted');
		this.printResults(rejected, 'Rejected');
	}

	static printResults(data, message) {
		console.log(message + " entries:");
		data.forEach(item => {
			console.log(item);
		});
	}

}