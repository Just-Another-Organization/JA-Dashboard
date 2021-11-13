<script lang='ts'>
	import { onMount } from 'svelte';
	import { setting } from '$store/store';
	import type { Config } from '$models/Config';

	let GITLAB_BASE_URL: URL;
	let GITLAB_ISSUES: URL;
	let GITLAB_PRIVATE_TOKEN = '';
	let GITLAB_USERNAME = '';
	let issues = [];
	let labels = {};

	onMount(() => {
		setting.subscribe((value: Config) => {
			const gitlabDomain = value.gitlabDomain;
			GITLAB_PRIVATE_TOKEN = value.gitlabPrivateToken;
			GITLAB_USERNAME = value.gitlabUsername;

			if (gitlabDomain) {
				const domain = new URL('https://' + gitlabDomain);
				GITLAB_BASE_URL = new URL(domain.href + '/api/v4');
				GITLAB_ISSUES = new URL(GITLAB_BASE_URL.href + '/issues');
			}

			if (gitlabDomain && GITLAB_PRIVATE_TOKEN && GITLAB_USERNAME) {
				getOpenedAssignedIssues()
					.then(async (result) => {
						issues = result;
					});
			}
		});
	});

	async function getOpenedAssignedIssues(): Promise<any[]> {
		const params = {
			'state': 'opened',
			'assignee_username': GITLAB_USERNAME,
			'scope': 'all'
		};
		const url = setQueryParams(GITLAB_ISSUES, params);
		return await consume(url);
	}

	async function getProjectLabels(projectUrl: string): Promise<any[]> {
		const url = new URL(projectUrl + '/labels');
		return await consume(url);
	}

	async function getProjectLabelsInfo(project: string): Promise<any[]> {
		if (!Object.prototype.hasOwnProperty.call(labels, project)) {
			labels[project] = await getProjectLabels(project);
		}

		return labels[project];
	}

	function setQueryParams(url: URL, params = {}): URL {
		Object.keys(params).forEach((key) => {
			url.searchParams.append(key, params[key]);
		});
		return url;
	}

	async function consume(url: URL): Promise<any> {
		const res = await fetch(url.href, {
			method: 'GET',
			headers: {
				'PRIVATE-TOKEN': GITLAB_PRIVATE_TOKEN
			}
		});
		return await res.json();
	}

	async function getLabelStyle(project: string, label: string): Promise<string> {
		let color = '#000000';
		let textColor = '#ffffff';
		const projectLabels = await getProjectLabelsInfo(project);

		if (projectLabels) {
			for (const projectLabel of projectLabels) {
				if (projectLabel.name === label) {
					color = projectLabel.color;
					textColor = projectLabel.text_color;
					break;
				}
			}
		}

		return `
		background-color: ${color}; color: ${textColor};
		`;
	}

</script>

<section>
	<div class='component-wrapper'>
		<p id='heading'>GitLab Tasks</p>
		<div id='content-area'>
			{#each issues as issue}
				<div class='card' on:click={window.open(issue.web_url)}>
					<div class='container'>
						<p>{issue.title}</p>
						{#each issue.labels as label}
							{#await getLabelStyle(issue._links.project, label) then labelStyle}
								<div style='{labelStyle}' class='label'>{label}</div>
							{/await}
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
    .component-wrapper {
        padding: 0.8rem;
    }

    #heading {
        text-align: center;
    }

    #content-area {
        display: inline-flex;
        justify-content: center;
    }

    .card {
        width: 14rem;
        height: 8rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        margin: 0.8rem;
        padding: 0.8rem;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
        padding: 2px 16px;
    }

    .label {
        margin: 0.1rem;
        padding: 0.1rem;
        display: inline-block;
        border-style: solid;
        border-width: 0.1rem;
        border-color: var(--theme-light-colors-text);
        border-radius: 0.2rem;
    }
</style>
