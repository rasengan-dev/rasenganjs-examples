import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const titleVariants = cva('font-bold leading-tight', {
  variants: {
    size: {
      sm: 'text-2xl md:text-3xl',
      md: 'text-3xl md:text-4xl',
      lg: 'text-4xl md:text-5xl',
      xl: 'text-5xl md:text-6xl',
    },
    colored: {
      default: 'text-[#132238] dark:text-gray-100',
      white: 'text-white dark:text-gray-900',
    },
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'md',
    colored: 'default',
    alignment: 'left',
  },
})

const subtitleVariants = cva('mt-2 max-w-[600px]', {
  variants: {
    size: {
      sm: 'text-sm md:text-base',
      md: 'text-base md:text-lg',
      lg: 'text-2xl md:text-2xl',
    },
    alignment: {
      left: 'text-left',
      center: 'text-center mx-auto',
      right: 'text-right ml-auto',
    },
  }, 
  defaultVariants: {
    size: 'lg',
    alignment: 'center',
  },
})

interface TitleProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof titleVariants> {
  children: React.ReactNode
  subtitle?: string
  id?:string
}

export function Title({ children, subtitle, size, colored, alignment, className, id, ...props }: TitleProps) {
  return (
    <div id={id} className={cn('space-y-2 lg:mt-28 md:mt-28 mt-12 lg:mb-16 md:mb-14 mb-6', className)} {...props}>
      <h2 className={cn(titleVariants({ size, colored, alignment }))}>
        {children}
      </h2>
      {subtitle && (
        <p className={cn(
          subtitleVariants({ size: size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm', alignment }),
          'text-gray-600 dark:text-gray-400'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

