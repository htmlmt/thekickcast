export function SearchForm() {
	return (
		<form className="flex grow items-stretch">
			<fieldset className="c-fieldset v-fieldset-search relative flex grow items-stretch overflow-visible">
				<label
					className="c-label v-label-search pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 whitespace-nowrap text-xs text-gray-700 transition-transform transition-colors"
					htmlFor="search"
				>
					Find a movie or episode...
				</label>

				<input
					className="h-12 w-full border-2 border-r-0 border-gray-50 py-2 pr-0 pl-4 text-xs focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/10"
					id="search"
					name="q"
					type="search"
				/>
			</fieldset>

			<input
				className="relative z-10 w-24 grow-0 cursor-pointer bg-gray-50 py-1 px-4 px-4 font-sans text-lg font-bold uppercase uppercase tracking-wider text-gray-700 transition-colors hover:bg-primary-400 hover:text-white"
				type="submit"
				value="Search"
			/>
		</form>
	);
}
