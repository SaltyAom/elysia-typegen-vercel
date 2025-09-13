import { Elysia, redirect } from 'elysia'
import { openapi } from '@elysiajs/openapi'
import { fromTypes } from '@elysiajs/openapi/gen'

import { User } from './modules/user'

export default new Elysia()
	.use(
		openapi({
			references: fromTypes(
				process.env.NODE_ENV === 'production'
					? 'api/index.d.ts'
					: 'api/index.ts'
			)
		})
	)
	.get('/', 'Hello World')
	.use(User)
	.compile()
