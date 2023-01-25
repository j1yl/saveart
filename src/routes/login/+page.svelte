<section class="px-4 mx-auto flex flex-col-reverse md:flex-row h-[90vh] justify-between w-full">
	<div class="flex flex-col w-full justify-center">
		<form action="?/login" method="POST" class="w-full md:w-2/3 flex flex-col gap-4 mx-auto">
			<h1 class="font-bold text-2xl mb-2 text-left">hey! welcome back</h1>
			<div class="flex flex-col">
				<label for="email" class="font-semibold">email</label>
				<input type="email" name="email" class="p-2 text-black rounded-xl font-semibold" />
			</div>
			<div class="flex flex-col">
				<label for="password" class="font-semibold">password</label>
				<input type="password" name="password" class="p-2 text-black rounded-xl font-semibold" />
			</div>
			<div class="flex justify-between items-center">
				<button type="submit" class="text-black bg-white px-4 py-2 rounded-xl font-bold">
					login
				</button>
			</div>
		</form>
	</div>
</section>
