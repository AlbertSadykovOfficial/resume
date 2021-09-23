function apply()
{
		switch (theme_by_session)
		{
				case 'dark_mode':
						dark_mode();
						break;
				case 'light_mode':
						light_mode();
						break;
				default:
						default_mode();
		}
}

apply();