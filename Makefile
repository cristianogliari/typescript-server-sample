mongo-up:
	cd ./docker-db && docker compose up -d

mongo-down:
	cd ./docker-db && docker compose down

server-up:
	npm run dev