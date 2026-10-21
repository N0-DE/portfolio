import type { PortfolioConfig } from '../types/portfolio.types';

/**
 * =============================================================================
 * MASTER PORTFOLIO CONFIGURATION
 * =============================================================================
 * Edit this file to update personal information, project case studies,
 * technical capabilities, and education details.
 * All data is strictly typed and verified against your codebase repositories.
 */

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Jose Anoob',
    initials: 'JA',
    title: 'Computer Science Engineering Student | AI & Software Developer',
    institution: "St. Joseph's College of Engineering and Technology, Palai",
    institutionShort: 'SJCET Palai',
    degree: 'B.Tech in Computer Science and Engineering',
    location: 'Kerala, India',
    headline: 'Engineering ideas into intelligent experiences.',
    heroBio:
      "Computer Science Engineering student exploring artificial intelligence, computer vision, enterprise software, and embedded hardware. Focused on building practical, high-impact systems with clean architecture and meticulous craftsmanship.",
    aboutEditorial: [
      "I am an engineer driven by curiosity and an obsession with understanding how complex systems function from the lowest hardware registers to high-level distributed software.",
      "Rather than remaining at the level of abstract concepts, I learn by building: from writing real-time computer vision tracking algorithms and offline-first enterprise ERPs, to programming bare-metal firmware on STM32 microcontrollers and automating industrial retail operations with computer vision guardrails.",
      "My approach balances engineering rigor with refined visual simplicity. I believe that professional software should not only be fast, reliable, and mathematically sound, but should also feel intuitive, deliberate, and respectful of the user's attention."
    ],
    philosophy: [
      {
        title: 'Systems-First Engineering',
        description:
          'Designing software from foundational data flow up to UI interactions, ensuring determinism, error recovery, and robust state machines.'
      },
      {
        title: 'Pragmatic AI & Edge Vision',
        description:
          'Applying machine learning and computer vision where it genuinely solves high-friction bottlenecks, optimized for real-time edge hardware.'
      },
      {
        title: 'Refined Craftsmanship',
        description:
          'Treating code structure, typography, micro-interactions, and architecture with equal attention to detail and aesthetic restraint.'
      }
    ],
    socials: {
      github: 'https://github.com/N0-DE',
      githubUsername: 'N0-DE',
      linkedin: 'https://linkedin.com/in/joseanoob',
      email: 'joseanoob1@gmail.com',
      location: 'Kerala, India'
    },
    availability: {
      status: 'Available for Select Opportunities',
      detail: 'Internships, High-Impact AI/Software Engineering Roles',
      openFor: [
        'Computer Vision & Applied AI',
        'Enterprise Software & Full-Stack',
        'Embedded Systems & IoT',
        'Systems & Automation Engineering'
      ]
    }
  },

  projects: [
    {
      id: 'traffic-vision',
      slug: 'traffic-vision-cv',
      number: '01',
      title: 'Traffic Counting & Vehicle Categorization Pipeline',
      shortTitle: 'Traffic Vision CV',
      subtitle: 'Real-time multi-class vehicle detection, virtual boundary tracking & temporal flow analytics',
      category: 'Computer Vision & Deep Learning',
      domain: 'Computer Vision',
      featuredImage: '/images/projects/traffic-vision.jpg',
      repoUrl: 'https://github.com/N0-DE/traffic-counting-cv',
      liveUrl: 'https://github.com/N0-DE/traffic-counting-cv',
      verificationStatus: 'Repository Verified',
      technologies: [
        'Python 3.12',
        'Ultralytics YOLOv8',
        'ByteTrack',
        'OpenCV',
        'CustomTkinter',
        'Flask',
        'Pandas'
      ],
      summary:
        'A high-throughput computer vision pipeline that performs real-time multi-class vehicle detection and directional line-crossing analytics, eliminating double-counts under occlusions with zero external cloud dependencies.',
      problemStatement:
        'Traditional municipal camera streams suffer from erratic tracking loss, identity-switching during traffic congestion, and severe latency spikes when deployed on local edge nodes without expensive GPU server clusters. Generic bounding-box counters repeatedly miscount vehicles during stop-and-go conditions.',
      objectives: [
        'Achieve deterministic directional counting using virtual trigger planes.',
        'Eliminate double-counting across overlapping bounding boxes with ByteTrack association.',
        'Provide dual operational interfaces: a low-latency native desktop monitoring client and a web analytics dashboard.',
        'Export structured CSV timestamp logs and automated HTML summary reports.'
      ],
      myRole:
        'Sole architect and developer. Designed the spatial line-crossing heuristic, integrated the YOLOv8-ByteTrack pipeline, and built both the CustomTkinter GUI and Flask analytics dashboard.',
      engineeringApproach:
        'Combined YOLOv8 for frame-level feature extraction with ByteTrack for tracklet association. Implemented a 2D vector cross-product formula against custom polyline virtual boundaries to accurately determine ingress versus egress trajectories.',
      technicalArchitecture: {
        layers: [
          {
            name: 'Video Ingestion Layer',
            components: ['OpenCV VideoCapture', 'Frame Decimation Queue', 'Resolution Rescaling'],
            description: 'Streams high-resolution RTSP or local video files with decoupled frame buffers to maintain consistent FPS.'
          },
          {
            name: 'Inference & Tracking Core',
            components: ['Ultralytics YOLOv8 Nano/Small', 'ByteTrack Associator', 'Kalman Filter State'],
            description: 'Executes bounding-box inference followed by spatial tracklet association across occluded frames.'
          },
          {
            name: 'Vector Spatial Analytics',
            components: ['Virtual Plane Segment Intersect', 'Directional Angle Comparator', 'Deduplication Cache'],
            description: 'Calculates vehicle centroid vector crossings against user-defined virtual sensor lines.'
          },
          {
            name: 'Presentation & Reporting',
            components: ['CustomTkinter Monitor', 'Flask Analytics Server', 'Pandas Report Generator'],
            description: 'Renders real-time HUD overlays, temporal density graphs, and exports CSV/HTML audit logs.'
          }
        ]
      },
      keyImplementationDetails: [
        {
          headline: 'Vector Cross-Product Line Crossing Algorithm',
          detail:
            'Rather than simple bounding box overlap, the tracking engine computes the mathematical intersection between the vehicle centroid trajectory vector (Pt-1 -> Pt) and the virtual barrier vector (A -> B).',
          language: 'python',
          codeSnippet: `def is_intersecting(p1, p2, p3, p4):
    """Determines whether trajectory line (p1->p2) intersects virtual trigger line (p3->p4)."""
    def ccw(a, b, c):
        return (c[1] - a[1]) * (b[0] - a[0]) > (b[1] - a[1]) * (c[0] - a[0])
    return ccw(p1, p3, p4) != ccw(p2, p3, p4) and ccw(p1, p2, p3) != ccw(p1, p2, p4)`
        },
        {
          headline: 'ByteTrack Occlusion Resilience',
          detail:
            'By maintaining low-confidence detection tracklets instead of dropping them immediately, the tracker bridges temporal occlusions when large vehicles pass in front of two-wheelers.'
        }
      ],
      engineeringChallenges: [
        {
          challenge: 'Frame dropped latency when running continuous inference on local hardware.',
          solution:
            'Separated video decoding, inference, and rendering into distinct asynchronous worker threads connected via thread-safe queues.',
          tradeoff: 'Marginal 1-frame display lag in exchange for consistent real-time 30+ FPS throughput.'
        },
        {
          challenge: 'Ghost counts caused by erratic centroid jitter on stationary idling vehicles.',
          solution:
            'Introduced a minimum displacement threshold and vector angle persistence check before validating a line crossing.',
          tradeoff: 'Extremely slow crawling vehicles require slightly wider trigger zones.'
        }
      ],
      verifiedResults: [
        'Zero duplicate counts across multi-lane test sequences.',
        'Sub-35ms average per-frame inference & tracking on standard workstation GPUs.',
        'Automated generation of traffic volume histograms, classification breakdown, and hourly peak flow tables.'
      ]
    },

    {
      id: 'temple-erp',
      slug: 'temple-erp-suite',
      number: '02',
      title: 'Temple ERP — Enterprise Community & Financial General Ledger',
      shortTitle: 'Temple ERP',
      subtitle: 'Offline-first community ERP with dual-engine persistence, recurring Masavari dues & automated counter audit',
      category: 'Enterprise Systems & Native Desktop',
      domain: 'Enterprise Systems',
      featuredImage: '/images/projects/temple-erp.jpg',
      repoUrl: 'https://github.com/N0-DE/Temple-ERP',
      liveUrl: 'https://github.com/N0-DE/Temple-ERP',
      verificationStatus: 'Repository Verified',
      technologies: [
        'FastAPI',
        'React 19',
        'Tauri v2',
        'TypeScript',
        'Tailwind CSS',
        'SQLAlchemy 2.0',
        'SQLite',
        'PostgreSQL',
        'Recharts'
      ],
      summary:
        'A full-stack, offline-first enterprise management suite engineered for community institutions. Features family registries, Nakshatra ceremonial bookings, recurring monthly dues (Masavari), and counter shift audit settlements.',
      problemStatement:
        'Community institutions and religious trusts manage complex genealogical family ledgers, unique Malayalam birth-star calendar rites, and high cash-volume counter shifts. Off-the-shelf ERPs fail due to rigid schemas, lack of offline reliability during power/internet failures, and poor audit controls for counter cash reconciliations.',
      objectives: [
        'Build a zero-downtime, offline-first native desktop interface with web synchronization capability.',
        'Automate compounding monthly family dues (Masavari) and specialized Death Relief Fund (DRF) distributions.',
        'Implement strict end-of-shift counter cash drawer audits to eliminate cash-to-digital discrepancies.',
        'Provide single-click Excel export for audit committee compliance.'
      ],
      myRole:
        'Lead architect and developer across the FastAPI backend, SQLAlchemy ORM modeling, and Tauri v2 + React 19 frontend application.',
      engineeringApproach:
        'Adopted a clean layered architecture with repository pattern in FastAPI. Leveraged Tauri v2 for an ultra-lightweight 15MB native desktop wrapper instead of bloated Electron containers. Designed a dual-engine database strategy: local SQLite for standalone offline terminals and PostgreSQL for multi-counter networked installations.',
      technicalArchitecture: {
        layers: [
          {
            name: 'Native Presentation Shell',
            components: ['Tauri v2 Desktop Shell', 'React 19', 'TypeScript', 'Tailwind CSS'],
            description: 'High-performance UI with zero Chromium overhead, native window chrome, and offline persistence.'
          },
          {
            name: 'REST API & Business Logic',
            components: ['FastAPI Router', 'Pydantic v2 Models', 'Masavari Calculation Service'],
            description: 'Strictly typed async endpoints managing family accounts, pooja receipts, and audit ledgers.'
          },
          {
            name: 'Data Access & Synchronization',
            components: ['SQLAlchemy 2.0 Async ORM', 'SQLite Local Node', 'PostgreSQL Central Cluster'],
            description: 'Handles transaction locks, optimistic concurrency, and automated schema migrations.'
          }
        ]
      },
      keyImplementationDetails: [
        {
          headline: 'Automated Masavari Compounding Engine',
          detail:
            'Calculates monthly dues dynamically based on family active status, arrears history, and special festival levies with transactional safety.',
          language: 'python',
          codeSnippet: `@router.post("/dues/calculate/{family_id}")
async def compute_family_dues(family_id: int, db: AsyncSession = Depends(get_db)):
    """Computes compounding monthly dues (Masavari) and death fund contributions."""
    family = await db.get(Family, family_id)
    if not family or not family.is_active:
        raise HTTPException(status_code=404, detail="Active family record not found")
    arrears = await dues_service.calculate_outstanding(db, family_id)
    return {"family_id": family_id, "masavari_due": arrears.total_due, "status": arrears.status}`
        },
        {
          headline: 'Tauri v2 Native Desktop Integration',
          detail:
            'Compiled frontend bundle directly into the Rust-based Tauri runtime, yielding near-instant cold startups (<300ms) and minimal RAM utilization.'
        }
      ],
      engineeringChallenges: [
        {
          challenge: 'Ensuring absolute ledger immutability and audit compliance during cashier shifts.',
          solution:
            'Enforced double-entry ledger semantics where receipts cannot be deleted, only offset with supervisor-authorized reversal entries.',
          tradeoff: 'Requires additional storage for reversal line items, ensuring an airtight audit trail.'
        },
        {
          challenge: 'Complex Nakshatra (birth-star) calendar mapping for daily pooja bookings.',
          solution:
            'Indexed all 27 astrological stars into a relational lookup table with indexed foreign keys for sub-millisecond query retrieval.',
          tradeoff: 'One-time setup configuration required during initial system deployment.'
        }
      ],
      verifiedResults: [
        'Complete end-to-end management of 1,000+ family units and daily pooja bookings.',
        'Zero discrepancy rate during counter settlement audits across test cash shifts.',
        'Lightweight desktop binary under 20MB with sub-50MB runtime memory footprint.'
      ]
    },

    {
      id: 'retail-automation',
      slug: 'retail-business-automation-suite',
      number: '03',
      title: 'Retail & Enterprise Business Automation Suite',
      shortTitle: 'Retail Ops Automation',
      subtitle: 'Five-module operational ecosystem spanning biometric payroll, OCR credit guardrails & WhatsApp remittance RPA',
      category: 'Robotic Process Automation & Computer Vision',
      domain: 'Automation & RPA',
      featuredImage: '/images/projects/retail-automation.jpg',
      repoUrl: 'https://github.com/N0-DE/retail-business-automation-suite',
      liveUrl: 'https://github.com/N0-DE/retail-business-automation-suite',
      verificationStatus: 'Repository Verified',
      technologies: [
        'Python 3.12',
        'CustomTkinter',
        'Tesseract OCR',
        'Selenium WebDriver',
        'PyAutoGUI',
        'FPDF2',
        'MS SQL Server',
        'openpyxl'
      ],
      summary:
        'A production-grade suite of five autonomous micro-systems streamlining mission-critical retail store operations: biometric payroll generation, barcode damage returns, real-time OCR billing credit-locking, and automated debtor WhatsApp remittance.',
      problemStatement:
        'High-volume retail enterprises bleed revenue through fragmented legacy tooling: payroll requires manual calculation from biometric punch logs, damaged returns sit unreconciled with vendors, cashiers inadvertently extend credit to blacklisted customers, and debtor follow-ups demand tedious manual texting.',
      objectives: [
        'Ingest raw eSSL biometric punch logs and automatically calculate split wages into branded PDF payslips.',
        'Eliminate unauthorized credit billing using real-time OCR screen detection to hook checkout keys.',
        'Automate vendor return claim tracking with barcode scanning and status tracking (TAKEN vs CASH).',
        'Drive human-rate-limited WhatsApp Accounts Receivable reminders with embedded payment QR codes.'
      ],
      myRole:
        'Sole creator and systems engineer. Developed all five specialized modules, integrated database drivers, built desktop UIs in CustomTkinter, and engineered keyboard-level OS hooks.',
      engineeringApproach:
        'Constructed decoupled, modular tools that interface directly with existing databases and GUI windows without requiring invasive source-code modifications to legacy ERPs. Employed optical character recognition (OCR) and low-level keyboard hooks to enforce guardrails on third-party POS billing terminals.',
      technicalArchitecture: {
        layers: [
          {
            name: '01. Biometric Payroll Engine',
            components: ['eSSL eTimeTrackLite Ingestion', 'Fractional Overtime Algorithm', 'FPDF2 Generator'],
            description: 'Computes shift wages, loader split allowances, advances, and exports ready-to-print payslips.'
          },
          {
            name: '02. Damage Claims Portal',
            components: ['Barcode Reader Listener', 'Vendor Batch Lookup', 'Dual Status Tracker'],
            description: 'Resolves suppliers from item codes and tracks defect reconciliations.'
          },
          {
            name: '03. POS Credit Control OCR',
            components: ['Tesseract Screen Scraper', 'Debtor Blacklist Matcher', 'Windows Keystroke Interceptor'],
            description: 'Locks Enter/Keypad keystrokes when restricted debtors are identified on cashier screen.'
          },
          {
            name: '04. Accounts Receivable RPA Bot',
            components: ['Aging Spreadsheet Parser', 'Selenium Chrome Controller', 'Dynamic QR Generator'],
            description: 'Dispatches personalized remittance messages with bank details and QR codes at human intervals.'
          }
        ]
      },
      keyImplementationDetails: [
        {
          headline: 'POS Credit Control OS Key Hooking',
          detail:
            'Scans active billing screen coordinates using PyTesseract OCR. If an overdue party is detected, it intercepts the OS keydown event to prevent receipt generation until supervisor authorization.',
          language: 'python',
          codeSnippet: `import keyboard, pytesseract, pyautogui

def monitor_pos_window():
    """Continuously evaluates POS billing screen and locks Enter if debtor is blacklisted."""
    screenshot = pyautogui.screenshot(region=(POS_X, POS_Y, POS_W, POS_H))
    text = pytesseract.image_to_string(screenshot)
    if any(debtor.lower() in text.lower() for debtor in BLACKLISTED_DEBTORS):
        keyboard.block_key('enter')
        trigger_supervisor_alert()`
        },
        {
          headline: 'Biometric Log Transformation',
          detail:
            'Directly connects to SQL Server to ingest bi-daily clock-in and clock-out timestamps, handling split shifts, mid-shift advances, and Sunday loading surcharges.'
        }
      ],
      engineeringChallenges: [
        {
          challenge: 'Avoiding anti-spam blocking while dispatching bulk WhatsApp debtor notices via Selenium.',
          solution:
            'Implemented pseudo-randomized human typing delays, realistic mouse trajectory simulation, and an interactive Dry-Run review mode.',
          tradeoff: 'Slightly slower dispatch cadence ensuring 100% account safety.'
        },
        {
          challenge: 'OCR latency on legacy cashier POS hardware.',
          solution:
            'Restricted screen capture coordinates strictly to the customer name bounding box and utilized Otsu binarization before OCR pass.',
          tradeoff: 'Position bounding box must be calibrated once for different monitor resolutions.'
        }
      ],
      verifiedResults: [
        'Reduced weekly payroll processing time from 4+ hours of manual math to under 60 seconds.',
        'Zero bad-debt slip-throughs at POS terminals during operational testing.',
        'Automated reconciliation of hundreds of supplier return items.'
      ]
    },

    {
      id: 'stm32-hydrosense',
      slug: 'stm32-hydrosense-telemetry',
      number: '04',
      title: 'STM32 HydroSense — Embedded Telemetry & Water-Level Monitor',
      shortTitle: 'STM32 HydroSense',
      subtitle: 'Precision multi-probe fluid level telemetry, SH1106 OLED display & hardware interrupt safety',
      category: 'Embedded Systems & Firmware',
      domain: 'Embedded & IoT',
      featuredImage: '/images/projects/stm32-hydrosense.jpg',
      repoUrl: 'https://github.com/N0-DE',
      liveUrl: 'https://github.com/N0-DE',
      verificationStatus: 'Hardware Validated',
      technologies: [
        'STM32F103C8T6 (ARM Cortex-M3)',
        'Embedded C',
        'STM32Cube HAL',
        'I2C Protocol',
        'SH1106 OLED (128x64)',
        'FreeRTOS',
        'Keil uVision'
      ],
      summary:
        'A dedicated embedded telemetry controller built on the STM32F103C8T6 ARM Cortex-M3 processor, featuring multi-probe fluid level monitoring, SH1106 graphical OLED telemetry, hardware debouncing, and automated pump cut-off safety relays.',
      problemStatement:
        'Standard mechanical float switches are notorious for mechanical fouling, corrosion, and contact bounce that cause chattering relays and catastrophic pump dry-runs. Low-cost consumer monitors lack real-time visual telemetry, fail-safe state machines, and electrical galvanic isolation.',
      objectives: [
        'Design a solid-state multi-stage probe telemetry system on an ARM Cortex-M3 MCU.',
        'Render real-time tank capacity graphs, telemetry status, and temperature on a 1.3-inch SH1106 OLED display.',
        'Implement software hysteresis and hardware interrupt debouncing to eliminate relay chatter.',
        'Enforce fail-safe watchdog timeouts for dry-run protection and overflow cut-off.'
      ],
      myRole:
        'Firmware engineer and hardware designer. Wrote bare-metal embedded C routines, integrated the SH1106 I2C graphics driver, configured peripheral timers, and calibrated probe voltage thresholds.',
      engineeringApproach:
        'Leveraged the STM32F103C8T6 (Blue Pill) running at 72MHz. Utilized ADC DMA conversion with a rolling median filter to suppress electrical noise. Structured the firmware as a deterministic state machine managing IDLE, SAMPLING, PUMPING, and FAULT states with FreeRTOS multitasking.',
      technicalArchitecture: {
        layers: [
          {
            name: 'Hardware Sensor Interface',
            components: ['Conductive Probe Array', 'RC Low-Pass Filter', 'Optocoupled Relay Driver'],
            description: 'Converts fluid contact states into stabilized digital and analog inputs while isolating the MCU.'
          },
          {
            name: 'MCU Firmware Core (ARM Cortex-M3)',
            components: ['STM32 HAL / CMSIS', 'FreeRTOS Task Scheduler', 'Rolling Median ADC Filter'],
            description: 'Processes sensor reads, computes level percentages, and manages safe pump relay activation.'
          },
          {
            name: 'Telemetry Display Driver',
            components: ['I2C Peripheral (400kHz Fast Mode)', 'SH1106 Framebuffer Engine', 'Miniature UI Layout'],
            description: 'Renders dynamic level graphs, capacity percentages, and animated pump status icons.'
          }
        ]
      },
      keyImplementationDetails: [
        {
          headline: 'Rolling Median Filter with Hysteresis',
          detail:
            'Fluid sloshing causes high-frequency oscillations. The firmware samples the analog sensor at 50Hz, passes readings through an 11-point rolling median filter, and applies a 3% hysteresis band before triggering relay transitions.',
          language: 'c',
          codeSnippet: `// STM32 HAL Tank Level State Determination with Hysteresis
void Evaluate_Tank_State(uint8_t current_percentage) {
    if (current_percentage <= CRITICAL_LOW_THRESHOLD && pump_state == PUMP_OFF) {
        HAL_GPIO_WritePin(RELAY_PORT, RELAY_PIN, GPIO_PIN_SET);
        pump_state = PUMP_ON;
    } else if (current_percentage >= HIGH_CUTOFF_THRESHOLD && pump_state == PUMP_ON) {
        HAL_GPIO_WritePin(RELAY_PORT, RELAY_PIN, GPIO_PIN_RESET);
        pump_state = PUMP_OFF;
    }
}`
        },
        {
          headline: 'SH1106 1.3-Inch OLED Framebuffer Engine',
          detail:
            'Implemented a lightweight 1024-byte display RAM buffer transmitted via DMA-driven I2C at 400kHz to achieve smooth telemetry refreshes without CPU blocking.'
        }
      ],
      engineeringChallenges: [
        {
          challenge: 'Electrolysis and mineral buildup on sensing probes over extended submerged periods.',
          solution:
            'Pulsed the sensor excitation voltage only during measurement windows (100ms pulse every 2 seconds) rather than maintaining continuous DC potential.',
          tradeoff: 'Slightly more complex timer scheduling; drastically extended probe lifespan.'
        },
        {
          challenge: 'I2C bus locking during sudden inductive relay de-energization.',
          solution:
            'Added flyback diodes, optocoupler isolation, and implemented an automatic I2C bus recovery routine in the firmware fault handler.',
          tradeoff: 'Added minor board component count to guarantee industrial reliability.'
        }
      ],
      verifiedResults: [
        'Stable, flicker-free telemetry on 128x64 SH1106 OLED display.',
        'Zero relay chatter recorded across repeated fill and drain cycles.',
        'Hardware-level fail-safe cut-off responding in under 10 milliseconds.'
      ]
    },

    {
      id: 'gesture-controller',
      slug: 'gesturesense-vision-controller',
      number: '05',
      title: 'GestureSense — Vision-Based Real-Time Hand Landmark Controller',
      shortTitle: 'GestureSense',
      subtitle: 'Low-latency hand tracking, geometric spatial heuristics & virtual input mapping',
      category: 'Human-Computer Interaction & AI',
      domain: 'Computer Vision',
      featuredImage: '/images/projects/gesturesense.jpg',
      repoUrl: 'https://github.com/N0-DE',
      liveUrl: 'https://github.com/N0-DE',
      verificationStatus: 'Repository Verified',
      technologies: [
        'Python 3.12',
        'Google MediaPipe',
        'OpenCV',
        'PyAutoGUI',
        'NumPy',
        'Human-Computer Interaction'
      ],
      summary:
        'A real-time touchless human-computer interaction system translating 21 spatial 3D hand landmark coordinates into low-latency OS navigation, scrolling, and game control inputs with exponential tremor smoothing.',
      problemStatement:
        'Vision-based touchless gesture controllers frequently suffer from jittery cursor movements caused by camera sensor noise, ambiguous multi-finger states, and high inference latency that causes perceptible interaction lag during gameplay.',
      objectives: [
        'Track 21 3D hand landmarks in real time using consumer-grade webcams.',
        'Formulate geometric vector heuristics to accurately classify gestures (pinch, swipe, spread, fist).',
        'Implement exponential moving average and Kalman smoothing to eliminate micro-tremor.',
        'Map recognized gestures seamlessly to OS-level mouse coordinates, clicks, and keystrokes.'
      ],
      myRole:
        'Developer and computer vision researcher. Programmed landmark geometry calculations, designed gesture classification state machine, and optimized frame inference pipelines.',
      engineeringApproach:
        'Leveraged MediaPipe Hands pipeline to extract 21 normalized 3D landmarks per hand. Constructed invariant Euclidean distance ratios between landmark pairs (e.g. index fingertip to thumb tip normalized by palm width) to ensure scale and distance invariance.',
      technicalArchitecture: {
        layers: [
          {
            name: 'Frame Acquisition & Preprocessing',
            components: ['OpenCV WebCam Stream', 'RGB Color Conversion', 'Horizontal Mirroring'],
            description: 'Captures and conditions camera frames at 60fps with low exposure latency.'
          },
          {
            name: 'Landmark Extraction Core',
            components: ['MediaPipe Hands Model', '21 3D Spatial Landmarks', 'Confidence Gate'],
            description: 'Estimates keypoint coordinates with sub-pixel precision across lighting variations.'
          },
          {
            name: 'Spatial Kinematics & Filter',
            components: ['Exponential Smoothing Filter', 'Scale Invariance Normalizer', 'State Debounce'],
            description: 'Dampens natural hand tremor while maintaining instantaneous response to intentional gestures.'
          },
          {
            name: 'Virtual HID Dispatcher',
            components: ['PyAutoGUI Controller', 'OS Keystroke Synthesizer', 'Action Mapper'],
            description: 'Translates classified gestures into native mouse clicks, continuous scrolling, or game controls.'
          }
        ]
      },
      keyImplementationDetails: [
        {
          headline: 'Scale-Invariant Pinch Gesture Detection',
          detail:
            'Computes the Euclidean distance between thumb tip (landmark 4) and index fingertip (landmark 8), normalized by the distance between wrist (landmark 0) and middle MCP (landmark 9).',
          language: 'python',
          codeSnippet: `def detect_pinch(landmarks):
    """Computes scale-invariant pinch metric between thumb tip and index tip."""
    thumb_tip = np.array([landmarks[4].x, landmarks[4].y])
    index_tip = np.array([landmarks[8].x, landmarks[8].y])
    wrist = np.array([landmarks[0].x, landmarks[0].y])
    middle_mcp = np.array([landmarks[9].x, landmarks[9].y])
    
    palm_scale = np.linalg.norm(middle_mcp - wrist)
    pinch_dist = np.linalg.norm(index_tip - thumb_tip) / (palm_scale + 1e-6)
    return pinch_dist < 0.28  # Deterministic pinch threshold`
        },
        {
          headline: 'Exponential Jitter Smoothing',
          detail:
            'Applied dynamic alpha smoothing: small movements receive heavy dampening to eliminate jitter while rapid hand sweeps bypass filtering for near-instant cursor tracking.'
        }
      ],
      engineeringChallenges: [
        {
          challenge: 'Fatigue during continuous air-mouse navigation.',
          solution:
            'Created a neutral "clutch" gesture where the user can reposition their hand without triggering cursor movement or unwanted clicks.',
          tradeoff: 'Requires a brief familiarization period for new users.'
        },
        {
          challenge: 'False positives when hands briefly move out of camera frame boundaries.',
          solution:
            'Implemented landmark visibility gates and edge proximity dampening to smoothly disengage tracking before frames drop.',
          tradeoff: 'Slightly narrower active tracking area near camera lens edges.'
        }
      ],
      verifiedResults: [
        'Sub-20ms interaction latency from physical hand gesture to OS action dispatch.',
        'Rock-steady cursor hovering with zero trembling during precision clicks.',
        'Successfully tested for gameplay control in arcade and driving simulations.'
      ]
    },

    {
      id: 'krishi-sakhi',
      slug: 'krishi-sakhi-telephony',
      number: '06',
      title: 'Krishi Sakhi — Multimodal Gemini AI & Telephony Gateway',
      shortTitle: 'Krishi Sakhi',
      subtitle: 'IVR voice hotline & multimodal crop disease diagnosis for agrarian communities',
      category: 'Applied Multimodal AI & Telephony',
      domain: 'Applied AI',
      featuredImage: '/images/projects/krishi-sakhi.jpg',
      repoUrl: 'https://github.com/N0-DE/KrishiSakshiApp',
      liveUrl: 'https://github.com/N0-DE/KrishiSakshiApp',
      verificationStatus: 'Repository Verified',
      technologies: [
        'Google Gemini API',
        'Twilio Voice IVR',
        'Node.js',
        'Express',
        'Android WebView',
        'React PWA',
        'TwiML'
      ],
      summary:
        'An accessible agricultural intelligence platform featuring an interactive voice response (IVR) telephone bridge for smallholder farmers and a multimodal crop disease diagnostic pipeline powered by the Google Gemini API.',
      problemStatement:
        'Smallholder farmers in rural agrarian belts face crop failure from plant pathologies but frequently lack modern smartphones, digital literacy, or reliable 4G/5G data connectivity needed to run complex agricultural diagnostic applications.',
      objectives: [
        'Deliver agricultural advisory services over standard telephone voice calls using Twilio IVR.',
        'Harness Google Gemini multimodal vision to detect botanical leaf diseases from camera snapshots.',
        'Provide actionable remediation guidance (organic bio-control, fungicide recommendations, dosage).',
        'Deploy a lightweight native Android wrapper with seamless offline fallbacks and camera bridging.'
      ],
      myRole:
        'Backend and telephony architect. Engineered the Twilio TwiML webhook flow, integrated the Gemini multimodal vision endpoint, and built the native Android client interface.',
      engineeringApproach:
        'Structured a dual-gateway system: an inbound telephony hotline allowing any farmer with a basic feature phone to dial in and speak queries, paired with a web/Android client where smartphone users can capture plant photographs for multimodal Gemini analysis.',
      technicalArchitecture: {
        layers: [
          {
            name: 'Voice Telephony Gateway',
            components: ['Twilio Voice Hotline', 'TwiML Webhook Router', 'Text-to-Speech Engine'],
            description: 'Answers telephone calls, gathers voice inputs, and plays localized spoken agricultural guidance.'
          },
          {
            name: 'Multimodal AI Diagnostics',
            components: ['Google Gemini 1.5 API', 'Botanical Disease Prompting', 'Confidence Evaluator'],
            description: 'Analyzes leaf photographs to identify blights, rusts, nutrient deficiencies, and pests.'
          },
          {
            name: 'Client Applications',
            components: ['Native Android Wrapper', 'React PWA Frontend', 'Camera Intent Bridge'],
            description: 'Provides clean photo capture, offline caching, and localized advisory cards.'
          }
        ]
      },
      keyImplementationDetails: [
        {
          headline: 'Gemini Multimodal Crop Diagnostic Flow',
          detail:
            'Images captured by farmers are passed to Gemini with a structured agricultural prompt returning disease identification, severity percentage, and precise organic/chemical treatment steps.',
          language: 'typescript',
          codeSnippet: `// Multimodal leaf disease analysis with Google Gemini API
export async function diagnoseCropLeaf(base64Image: string, mimeType: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = \`Analyze this crop leaf. Identify:
  1. Disease / Pest condition (or healthy)
  2. Estimated severity percentage
  3. Actionable remediation steps (bio-control and organic treatments).\`;
  
  const result = await model.generateContent([
    prompt,
    { inlineData: { data: base64Image, mimeType } }
  ]);
  return result.response.text();
}`
        },
        {
          headline: 'Twilio IVR Voice Response Pipeline',
          detail:
            'Engineered dynamic TwiML generation to guide callers through audio menus, capture spoken questions, and return concise, actionable guidance.'
        }
      ],
      engineeringChallenges: [
        {
          challenge: 'Varying audio quality and regional dialects over telephony lines.',
          solution:
            'Structured the IVR menu with simple dual-tone multi-frequency (DTMF) keypad fallbacks for critical categories (pesticides, weather, market rates).',
          tradeoff: 'Slightly more structured flow ensuring zero miscommunication on critical dosage instructions.'
        },
        {
          challenge: 'Poor network connectivity in rural farmland preventing large image uploads.',
          solution:
            'Implemented client-side image compression on the Android client reducing 12MB camera photos down to <400KB before transmission.',
          tradeoff: 'Minimal loss of background pixel detail while preserving essential leaf lesion patterns.'
        }
      ],
      verifiedResults: [
        'Functional telephony gateway answering calls and delivering automated farming advisories.',
        'High-confidence multimodal identification of common agricultural pathologies.',
        'Lightweight Android application operating smoothly on low-spec budget hardware.'
      ]
    }
  ],

  skillCategories: [
    {
      title: 'Computer Vision & Deep Learning',
      description: 'Real-time object detection, tracking, optical character recognition & spatial heuristics.',
      iconName: 'Eye',
      skills: [
        { name: 'Ultralytics YOLOv8', highlight: true, verificationNote: 'Traffic counting & vehicle categorization' },
        { name: 'ByteTrack & Centroid Tracking', highlight: true, verificationNote: 'Directional line-crossing algorithms' },
        { name: 'OpenCV', highlight: true, verificationNote: 'Video pipelines & image processing' },
        { name: 'Tesseract OCR', highlight: true, verificationNote: 'POS billing screen monitor & credit control' },
        { name: 'Google MediaPipe', highlight: false, verificationNote: '21 3D hand landmark gesture control' },
        { name: 'Google Gemini Multimodal API', highlight: true, verificationNote: 'Crop pathology diagnostic engine' }
      ]
    },
    {
      title: 'Enterprise & Backend Systems',
      description: 'Clean-architecture REST APIs, relational modeling, ledger reconciliation & desktop runtimes.',
      iconName: 'Server',
      skills: [
        { name: 'FastAPI', highlight: true, verificationNote: 'Temple-ERP REST backend & auth' },
        { name: 'Python 3.12', highlight: true, verificationNote: 'Core engineering language across all suites' },
        { name: 'SQLAlchemy 2.0', highlight: true, verificationNote: 'Async ORM modeling & transaction ledgers' },
        { name: 'Tauri v2', highlight: true, verificationNote: 'Native lightweight Rust-powered desktop shell' },
        { name: 'Node.js & Express', highlight: false, verificationNote: 'Twilio telephony IVR backend' },
        { name: 'Pydantic v2', highlight: false, verificationNote: 'Strict type validation & settings management' }
      ]
    },
    {
      title: 'Frontend & Systems UI',
      description: 'Editorial interfaces, performant reactive applications & cross-platform mobile frameworks.',
      iconName: 'Layout',
      skills: [
        { name: 'React 19 / 18', highlight: true, verificationNote: 'Temple-ERP UI, HomeSync, Portfolio' },
        { name: 'TypeScript', highlight: true, verificationNote: 'Strict typed application code' },
        { name: 'Tailwind CSS', highlight: true, verificationNote: 'Obsidian & Champagne design system' },
        { name: 'Flet (Flutter for Python)', highlight: false, verificationNote: 'Mobile POS Route Collector' },
        { name: 'CustomTkinter', highlight: true, verificationNote: 'Biometric payroll & retail operations suite' },
        { name: 'Recharts & Canvas', highlight: false, verificationNote: 'Financial charts & node lattice' }
      ]
    },
    {
      title: 'Embedded Systems & IoT',
      description: 'Microcontroller firmware, hardware debouncing, sensor interfacing & low-power states.',
      iconName: 'Cpu',
      skills: [
        { name: 'STM32F103C8T6 (ARM Cortex-M3)', highlight: true, verificationNote: 'HydroSense tank telemetry controller' },
        { name: 'Embedded C / C++', highlight: true, verificationNote: 'Bare-metal & STM32 HAL drivers' },
        { name: 'SH1106 / SSD1306 OLED I2C', highlight: true, verificationNote: 'Hardware graphical display drivers' },
        { name: 'ESP32 IoT Development', highlight: false, verificationNote: 'WiFi telemetry & sensor reading' },
        { name: 'FreeRTOS & Keil uVision', highlight: false, verificationNote: 'Real-time task scheduling & firmware builds' },
        { name: 'Sensor Calibration & ADC', highlight: false, verificationNote: 'Fluid probe debounce & voltage conditioning' }
      ]
    },
    {
      title: 'Automation, RPA & Tooling',
      description: 'Desktop robotic process automation, key hooks, headless automation & database drivers.',
      iconName: 'Terminal',
      skills: [
        { name: 'Selenium WebDriver', highlight: true, verificationNote: 'WhatsApp AR debt reminder bot' },
        { name: 'PyAutoGUI & Key Hooks', highlight: true, verificationNote: 'POS billing lock & touchless HID mapping' },
        { name: 'openpyxl & FPDF2', highlight: true, verificationNote: 'Automated dispatch manifests & PDF payslips' },
        { name: 'Git & GitHub', highlight: true, verificationNote: 'Version control & modular mono-repos' },
        { name: 'Linux & Windows APIs', highlight: false, verificationNote: 'Shell scripting & process supervision' },
        { name: 'Postman & HTTPX', highlight: false, verificationNote: 'API contract testing & load validation' }
      ]
    },
    {
      title: 'Databases & Persistence',
      description: 'Relational data modeling, double-entry financial integrity & dual-engine synchronization.',
      iconName: 'Database',
      skills: [
        { name: 'Microsoft SQL Server', highlight: true, verificationNote: 'eSSL biometric & retail ERP queries' },
        { name: 'SQLite', highlight: true, verificationNote: 'Offline-first desktop persistence' },
        { name: 'PostgreSQL', highlight: true, verificationNote: 'Centralized multi-terminal ERP backend' },
        { name: 'MySQL', highlight: false, verificationNote: 'Relational database systems' }
      ]
    }
  ],

  education: [
    {
      institution: "St. Joseph's College of Engineering and Technology, Palai",
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      location: 'Kottayam, Kerala, India',
      period: 'B.Tech Undergrad',
      status: 'In Progress',
      description:
        'Rigorous curriculum spanning Algorithms, Operating Systems, Database Management, Computer Networks, and Artificial Intelligence, combined with hands-on systems and hardware engineering.',
      highlights: [
        'Specialized focus on Computer Vision, Embedded Systems, and Clean Architecture.',
        'Active engineering contributions across open-source and institutional software projects.',
        'Building production-ready software solutions for real-world enterprise and community needs.'
      ]
    }
  ]
};
