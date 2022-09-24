function combat(health, damage) {
	let currentHealth = health - damage;
	return currentHealth > 0 ? currentHealth : 0;
}