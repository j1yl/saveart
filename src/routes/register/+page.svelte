<section class="px-4 mx-auto flex flex-col-reverse md:flex-row h-[90vh] justify-between w-full">
	<div class="h-full flex flex-col justify-center w-full">
		<h3 class="text-4xl h-max font-semibold">
			kickstart your creative journey with a free account
		</h3>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo commodi ea
			blanditiis!
		</p>
	</div>
	<div class="flex flex-col w-full justify-center">
		<form action="?/register" method="POST" class="w-full md:w-2/3 flex flex-col gap-4 mx-auto">
			<h1 class="font-bold text-2xl mb-2 text-left">create your account</h1>
			<div class="flex flex-col">
				<label for="email" class="font-semibold">email</label>
				<input type="email" name="email" class="p-2 text-black rounded-xl font-semibold" />
			</div>
			<div class="flex flex-col">
				<label for="password" class="font-semibold">password</label>
				<input type="password" name="password" class="p-2 text-black rounded-xl font-semibold" />
			</div>
			<div class="flex gap-2 justify-between items-center">
				<button type="submit" class="text-black bg-white px-4 py-2 rounded-xl font-bold">
					register
				</button>
				<p>
					already have an account? <a href="?/login" class="underline">log in</a>
				</p>
			</div>
		</form>
	</div>
</section>
