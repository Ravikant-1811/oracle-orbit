import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";
import MagicCard from "../ui/magic-card";
import blogs from "@/utils/constants/blogs.json";

const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));

const Blogs = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0">
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                <span>Oracle Orbit Blog</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>SEO</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Websites</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Automation</span>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <MagicCard key={blog.slug} className="relative p-0 md:p-0">
                        <Link href={`/resources/blog/${blog.slug}`} className="absolute inset-0 z-10" aria-label={blog.title} />
                        <Card className="group relative z-0 border-0">
                            <CardContent className="p-4 lg:p-6">
                                <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={1024}
                                        height={1024}
                                        unoptimized
                                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:h-52"
                                    />
                                </div>
                                <div className="mt-5 flex items-center gap-3 text-xs font-medium text-muted-foreground">
                                    <span className="rounded-full border border-border/70 px-3 py-1 text-foreground/80">
                                        {blog.category}
                                    </span>
                                    <time dateTime={blog.date_published}>{formatDate(blog.date_published)}</time>
                                    <span>{blog.read_time}</span>
                                </div>
                                <div className="mt-4 flex flex-col items-start justify-start">
                                    <CardTitle className="text-lg font-semibold leading-tight text-foreground transition-all duration-300 group-hover:text-foreground/80">
                                        {blog.title}
                                    </CardTitle>
                                    <CardDescription className="mt-3 text-sm leading-6">
                                        {blog.description}
                                    </CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    </MagicCard>
                ))}
            </div>
        </div>
    )
};

export default Blogs
