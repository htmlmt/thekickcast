export function SearchForm() {
	return (
		<form className="flex grow items-stretch">
			<fieldset className="relative grow flex items-stretch overflow-visible c-fieldset v-fieldset-search">
				<label className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap left-5 text-xs text-gray-700 pointer-events-none c-label v-label-search transition-transform transition-colors" htmlFor="search">
					Find a movie or episode...
				</label>

				<input className="h-12 border-2 border-r-0 border-gray-50 pr-0 pl-4 py-2 w-full focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/10 text-xs" id="search" name="q" type="search" />
			</fieldset>

			<input className="transition-colors hover:bg-blue-200 hover:text-white uppercase bg-gray-50 font-bold py-1 px-4 font-display text-lg uppercase tracking-wider text-gray-700 px-4 cursor-pointer grow-0 w-24 relative z-10" type="submit" value="Search" />
		</form>
	)
}
