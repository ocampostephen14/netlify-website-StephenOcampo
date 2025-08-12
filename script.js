// Fill in the content for each section (ready-to-publish answers)
document.getElementById('how-made-text').innerText =
`I built this site as a plain static HTML/CSS/JS project so it is simple to review and deploy.
I chose plain HTML for easy structure, CSS for styling and a small JS file for the contents and interactivity.`;

document.getElementById('challenge-text').innerText =
`One challenge that I faced it that I have a hard time on answering the question below about using Netlify functions in this website and DNS configurations because it is not my expertise.
I solved it by also watching a YouTube video that helps me create a button and a JS function for Netlify that displays "Hello, world" and "timestamps". As for the DNS configs, I researched about the challenges that someone faced when they are working with DNS servers.`;

document.getElementById('service-feedback-text').innerText =
`Netlify has a user-friendly interface that helps you connect your GitHub account and your repositories. For me, it is easy to use rather than installing a CLI for local deployment.`;

document.getElementById('favorites').innerHTML =
`<strong>Top 5 favorite activities:</strong>
<ol>
<li>Work with the development team to help design a new feature based on feedback from customers</li>
<li>Submit bug reports and potentially bug fixes</li>
<li>Debug a customer's build using a programming language and framework that you've never seen before</li>
<li>Write and maintain Support Guides for our product</li>
<li>Dig through server logs to troubleshoot a customer's website behavior</li>
</ol>`;

document.getElementById('least-favs').innerHTML =
`<strong>Top 5 least favorite activities:</strong>
<ol>
<li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
<li>Set up your own copy of several site frameworks for debugging</li>
<li>Help train and onboard new support teammates</li>
<li>Create video tutorials to help teach users a specific feature or use case</li>
<li>Respond to Netlify customers on Twitter</li>
</ol>`;

document.getElementById('dev-doc-text').innerText =
`After researching in Google, I picked Stripe API docs (https://stripe.com/docs). It is clear getting-started sections, live examples, well-organized reference, and interactive examples.`;

document.getElementById('dns-text').innerText =
`1) Confusing terminology: People often mix up "nameservers" and "records", which can break their site. A quick solution for this is to give clear steps and a quick way to check if it's correct.

2) Changes takes time: Domain updates are not instant because of the caching. It should explain the delay and giving a checklist to confirm.`;

document.getElementById('troubleshoot-steps').innerText =
`1. Ask the user for the site name and the exact time they noticed the failure.
2. Inspect the build logs line-by-line; look for the first error message and the stack trace.
3. If logs show a non-zero exit code only, check common causes: missing build dependencies, failing install (node_modules), incorrect Node/Python version, failing test command, or incorrect build command.
4. Request minimal additional info: branch name, commit hash, and environment variables.
5. Ask the user to enable diagnostic logging or run the same build locally using the same Node version and build command.
6. If repository is private and user cannot share, ask them to run a local build and paste the first failing lines.
7. If build fails during install step, request the build log section that shows package install output.
8. If it is a dependency/fetch issue, suggest clearing caches or pinning package versions.
9. If all else fails, escalate to engineering with logs, timestamp, and the full environment details.`;

document.getElementById('customer-reply').innerText =
`Good day,

Thanks for reporting this — I’m sorry your site failed to build. I can see a “Build script returned non-zero exit code: 2” in the logs. 
That usually means a script the build ran exited with an error.

Could you please send:
• The Netlify site name or URL
• The git branch and commit SHA you deployed
• The build command shown in Site settings
• The build log lines around the first error (if possible)

If you prefer, you can try running the build locally with the same build command and share the output. I’ll review the logs as soon as you send them and suggest next steps. 
Thanks for the details — we’ll get this fixed.

Best,
Stephen Ocampo`;

document.getElementById('report-text').innerText =
`1. Thank the reporter and confirm receipt of their message.
2. Review the details provided, try to reproduce the issue in a controlled environment without risking production data.
3. Notify the internal security team immediately to verify and assess the scope of the potential vulnerability.
4. Let the reporter know: "We take security very seriously. Our team is actively investigating this issue and we will keep you updated. We appreciate your responsible disclosure."
5. If the issue seems severe, involve senior leadership and, if needed, temporarily limit exposure while a fix is developed.
6. After confirmation and resolution, inform the reporter and thank them, possibly crediting them in a security disclosure if appropriate.`;

document.getElementById('fn-result').innerText = 'Not called yet';
document.getElementById('call-fn').addEventListener('click', async () => {
  try {
    const r = await fetch('/.netlify/functions/hello');
    const data = await r.json();
    document.getElementById('fn-result').innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    document.getElementById('fn-result').innerText = 'Function call failed: ' + e.message;
  }
});
