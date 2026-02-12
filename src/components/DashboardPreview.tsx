
import { Activity, Server, Database, Lock } from 'lucide-react';

const DashboardPreview = () => {
    return (
        <div className="relative w-full max-w-2xl mx-auto perspective-1000 group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* Main Glass Panel */}
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:rotate-x-2 hover:scale-[1.02]">

                {/* Header / Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="ml-4 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-xs text-gray-400 font-mono">
                            admin_panel.tsx
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500">
                        <Activity className="w-4 h-4" />
                        <Lock className="w-4 h-4" />
                    </div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="p-6 grid grid-cols-12 gap-6">

                    {/* Sidebar */}
                    <div className="col-span-3 space-y-4">
                        <div className="h-20 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-50"><Server className="w-4 h-4 text-cyan-400" /></div>
                            <div className="text-xs text-cyan-300 font-medium">Server Status</div>
                            <div className="text-lg font-bold text-white mt-1">98.2%</div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500/30">
                                <div className="h-full w-[98%] bg-cyan-400"></div>
                            </div>
                        </div>
                        <div className="h-20 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-50"><Database className="w-4 h-4 text-purple-400" /></div>
                            <div className="text-xs text-purple-300 font-medium">Database Load</div>
                            <div className="text-lg font-bold text-white mt-1">42ms</div>
                            <div className="w-full h-8 mt-2 flex items-end space-x-1">
                                {[40, 60, 45, 70, 50, 60, 30].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-purple-500/40 rounded-t-sm"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Area */}
                    <div className="col-span-9 space-y-6">

                        {/* Chart Area Mockup */}
                        <div className="rounded-lg bg-black/20 border border-white/5 p-4 h-40 relative">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Traffic Overview</h4>
                                <div className="text-xs text-green-400 flex items-center bg-green-900/20 px-2 py-1 rounded">+24.5%</div>
                            </div>
                            {/* CSS Chart Line */}
                            <div className="absolute bottom-4 left-4 right-4 top-12 flex items-end justify-between space-x-2">
                                {[20, 35, 45, 30, 55, 45, 60, 50, 75, 65, 80, 95].map((h, i) => (
                                    <div key={i} className="w-full bg-gradient-to-t from-cyan-500/10 to-cyan-500/40 rounded-t relative group-hover:from-cyan-500/20 group-hover:to-cyan-500/60 transition-colors" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            {/* Bezier Curve Overlay (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none p-4 pt-12" preserveAspectRatio="none">
                                <path d="M0,100 C50,80 100,60 150,80 S250,50 300,60 S400,20 500,10" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                            </svg>
                        </div>

                        {/* Code Snippet / Terminal */}
                        <div className="rounded-lg bg-[#050505] border border-white/5 p-4 font-mono text-xs">
                            <div className="flex space-x-2 mb-2">
                                <span className="text-purple-400">const</span> <span className="text-blue-400">initialize</span> = <span className="text-yellow-400">async</span> () ={'>'} {'{'}
                            </div>
                            <div className="pl-4 space-y-1 text-gray-400">
                                <div><span className="text-cyan-400">await</span> system.<span className="text-blue-300">connect</span>(<span className="text-green-400">'db_shard_01'</span>);</div>
                                <div><span className="text-cyan-400">await</span> cache.<span className="text-blue-300">sync</span>(config.<span className="text-purple-300">redis</span>);</div>
                                <div><span className="text-gray-500">// System optimized</span></div>
                                <div><span className="text-purple-400">return</span> <span className="text-green-400">true</span>;</div>
                            </div>
                            <div className="mt-2">{'}'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPreview;
