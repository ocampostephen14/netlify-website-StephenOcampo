// Fill in the content for each section (ready-to-publish answers)
document.getElementById('how-made-text').innerText =
`I built this site as a plain static HTML/CSS/JS project so it is simple to review and deploy.
I chose: plain HTML for easy structure, CSS for styling and a small JS file for interactivity.
Netlify is ideal because it can publish a static site directly from a public GitHub repo and supports serverless functions easily.`;

document.getElementById('challenge-text').innerText =
`One challenge: deploying a serverless function without a build process. I solved it by placing the function in netlify/functions and verifying the file name and exports match Netlify's expectations.`;

document.getElementById('service-feedback-text').innerText =
`Positive: quick deployments and a pleasant dashboard experience.
Constructive: clearer error messaging in build logs (more granular line/filename references) would help debugging faster. Also a “retry build with same settings but verbose logging” button would be nice.`;

document.getElementById('favorites').innerHTML =
`<strong>Top 5 favorite activities:</strong>
<ol>
<li>Design systems</li>
<li>Accessibility auditing</li>
<li>Performance optimization</li>
<li>Continuous deployment setup</li>
<li>Writing developer docs</li>
</ol>`;

document.getElementById('least-favs').innerHTML =
`<strong>Top 5 least favorite activities:</strong>
<ol>
<li>Manual cross-browser CSS hacks</li>
<li>Legacy browser polyfills</li>
<li>Complex FTP-based deploys</li>
<li>Configuring obscure DNS records by hand</li>
<li>Fixing build failures with no logs</li>
</ol>`;

document.getElementById('dev-doc-text').innerText =
`Example: Stripe API docs (https://stripe.com/docs). Why: clear getting-started sections, live examples, well-organized reference, versioned changelogs, and interactive examples.`;

document.getElementById('dns-text').innerText =
`1) Confusing terminology: Users often confuse nameservers vs. A/AAAA/CNAME records. They expect to add a CNAME but the domain requires editing nameservers; this causes downtime. Solution: provide simple “copy/paste” instructions per registrar and verification steps.

2) Propagation and TTL expectations: Non-technical customers expect changes to be instant but TTL and caching cause delay. Solution: explain in plain terms, suggest low TTL before big changes and show a verification/checklist page after change.`;

document.getElementById('troubleshoot-steps').innerText =
`1. Ask the user for the site name (Netlify site id or URL) and the exact time they noticed the failure.
2. Inspect the build logs line-by-line; look for the first error message and the stack trace.
3. If logs show a non-zero exit code only, check common causes: missing build dependencies, failing install (node_modules), incorrect Node/Python version, failing test command, or incorrect build command.
4. Request minimal additional info: branch name, commit hash, and environment variables (redact secrets).
5. Ask the user to enable verbose/diagnostic logging or run the same build locally using the same Node version and build command (if they can).
6. If repository is private and user cannot share, ask them to run a local build and paste the first failing lines.
7. If build fails during install step, request the build log section that shows package install output.
8. If it is a dependency/fetch issue, suggest clearing caches or pinning package versions.
9. If all else fails, escalate to engineering with logs, timestamp, and the full environment details.`;

document.getElementById('customer-reply').innerText =
`Hi [Customer name],

Thanks for reporting this — I’m sorry your site failed to build. I can see a “Build script returned non-zero exit code: 2” in the logs. That usually means a script the build ran exited with an error.

Could you please send:
• The Netlify site name or URL
• The git branch and commit SHA you deployed
• The build command shown in Site settings
• The build log lines around the first error (if possible)

If you prefer, you can try running the build locally with the same build command and share the output. I’ll review the logs as soon as you send them and suggest next steps. Thanks for the details — we’ll get this fixed.

Best,
[Your Name] — Support Engineer`;

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
