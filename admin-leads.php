<?php
// Siragugal Higher Education Services - Admin Lead Manager
$leadsFile = __DIR__ . '/api/leads.json';
$leads = [];
if (file_exists($leadsFile)) {
    $content = file_get_contents($leadsFile);
    $leads = json_decode($content, true) ?: [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Siragugal Admin - Student Leads & Referrals</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
</head>
<body class="bg-slate-100 text-slate-800 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-8">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                    <img src="./logo.png" alt="Siragugal" class="w-full h-full object-contain">
                </div>
                <div>
                    <h1 class="text-xl font-black text-slate-900">SIRAGUGAL ADMIN DASHBOARD</h1>
                    <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider">Student References & Admission Leads</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <span class="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-lg border border-blue-200">
                    Total Leads: <?= count($leads); ?>
                </span>
                <a href="./" class="text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 transition-colors">
                    ← Back to Website
                </a>
            </div>
        </div>

        <!-- Leads Table -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-4 border-b border-slate-100 flex items-center justify-between">
                <h2 class="font-bold text-sm uppercase tracking-wider text-slate-700">Received Student Inquiries</h2>
                <span class="text-xs text-slate-400">Stored automatically whenever form is submitted</span>
            </div>

            <?php if (empty($leads)): ?>
                <div class="p-12 text-center text-slate-400 space-y-2">
                    <p class="text-sm font-semibold">No student reference leads received yet.</p>
                    <p class="text-xs text-slate-400">When students submit the form on the website or via Formspree, their details will display here.</p>
                </div>
            <?php else: ?>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-slate-50 text-slate-500 uppercase tracking-wider text-[11px] font-bold border-b border-slate-200">
                                <th class="p-3.5">Student Details</th>
                                <th class="p-3.5">Phone / WhatsApp</th>
                                <th class="p-3.5">12th Cut-off</th>
                                <th class="p-3.5">Target Course & Branch</th>
                                <th class="p-3.5">Target College</th>
                                <th class="p-3.5">Quota</th>
                                <th class="p-3.5">Date & Time</th>
                                <th class="p-3.5 text-right">Admin Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <?php foreach ($leads as $l): ?>
                                <tr class="hover:bg-blue-50/50 transition-colors">
                                    <td class="p-3.5">
                                        <div class="font-bold text-slate-900 text-sm"><?= htmlspecialchars($l['studentName']); ?></div>
                                        <div class="text-[11px] text-slate-400"><?= htmlspecialchars($l['email'] ?: 'No email'); ?></div>
                                    </td>
                                    <td class="p-3.5">
                                        <span class="font-bold text-blue-900"><?= htmlspecialchars($l['phone']); ?></span>
                                    </td>
                                    <td class="p-3.5">
                                        <span class="px-2 py-0.5 rounded font-black bg-amber-100 text-amber-900">
                                            <?= htmlspecialchars($l['cutoffMarks'] ?: 'N/A'); ?>
                                        </span>
                                    </td>
                                    <td class="p-3.5">
                                        <div class="font-bold text-slate-800"><?= htmlspecialchars($l['course']); ?></div>
                                        <div class="text-[11px] text-slate-500"><?= htmlspecialchars($l['specialization']); ?></div>
                                    </td>
                                    <td class="p-3.5 text-slate-700 font-medium max-w-xs truncate">
                                        <?= htmlspecialchars($l['collegeName']); ?>
                                        <span class="text-slate-400 block text-[11px]"><?= htmlspecialchars($l['preferredCity']); ?></span>
                                    </td>
                                    <td class="p-3.5">
                                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                                            <?= htmlspecialchars($l['quotaType']); ?>
                                        </span>
                                    </td>
                                    <td class="p-3.5 text-slate-400 text-[11px]">
                                        <?= htmlspecialchars($l['timestamp']); ?>
                                    </td>
                                    <td class="p-3.5 text-right">
                                        <div class="flex items-center justify-end gap-1.5">
                                            <a href="tel:<?= preg_replace('/[^0-9+]/', '', $l['phone']); ?>" class="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px]">
                                                📞 Call
                                            </a>
                                            <a href="https://wa.me/<?= preg_replace('/[^0-9]/', '', $l['phone']); ?>?text=<?= urlencode('Hello ' . $l['studentName'] . ', this is Siragugal Higher Education Services regarding your college admission inquiry.'); ?>" target="_blank" class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px]">
                                                💬 WhatsApp
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>

    </div>
</body>
</html>

